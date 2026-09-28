import { Router, Request, Response } from 'express';
import { isDatabaseConnected } from '../config/db';
import { DestinationModel } from '../models/Destination';
import { INITIAL_DESTINATIONS } from '../data/seedData';

const router = Router();
let inMemoryDestinations = [...INITIAL_DESTINATIONS];

// GET /api/destinations
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search, region, featured, sort } = req.query;

    if (isDatabaseConnected()) {
      const query: any = {};
      if (search) {
        const regex = new RegExp(String(search), 'i');
        query.$or = [{ name: regex }, { country: regex }, { city: regex }];
      }
      if (region && region !== 'all') {
        query.region = region;
      }
      if (featured === 'true') {
        query.featured = true;
      }

      let destinations = await DestinationModel.find(query);
      if (destinations.length === 0 && !search && (!region || region === 'all')) {
        // Seed if collection is currently empty
        await DestinationModel.insertMany(INITIAL_DESTINATIONS as any);
        destinations = await DestinationModel.find(query);
      }

      if (sort === 'price-low') {
        destinations.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-high') {
        destinations.sort((a, b) => b.price - a.price);
      } else if (sort === 'rating') {
        destinations.sort((a, b) => b.rating - a.rating);
      }

      return res.json(destinations);
    }

    // Fallback in-memory
    let results = [...inMemoryDestinations];

    if (search) {
      const q = String(search).toLowerCase();
      results = results.filter(
        d =>
          d.name.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q) ||
          d.city.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q)
      );
    }

    if (region && region !== 'all') {
      results = results.filter(d => d.region.toLowerCase() === String(region).toLowerCase());
    }

    if (featured === 'true') {
      results = results.filter(d => d.featured);
    }

    if (sort === 'price-low') {
      results.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      results.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return res.json(results);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return res.status(500).json({ error: 'Failed to retrieve destinations' });
  }
});

// GET /api/destinations/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (isDatabaseConnected()) {
      const destination = await DestinationModel.findOne({ id } as any);
      if (destination) {
        return res.json(destination);
      }
    }

    const fallback = inMemoryDestinations.find(d => d.id === id);
    if (!fallback) {
      return res.status(404).json({ error: 'Destination not found' });
    }

    return res.json(fallback);
  } catch (error) {
    console.error('Error fetching destination by ID:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
