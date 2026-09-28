import { Router, Request, Response } from 'express';
import { isDatabaseConnected } from '../config/db';
import { PackageModel } from '../models/Package';
import { INITIAL_PACKAGES } from '../data/seedData';

const router = Router();
let inMemoryPackages = [...INITIAL_PACKAGES];

// GET /api/packages
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search, travelStyle, featured, maxPrice } = req.query;

    if (isDatabaseConnected()) {
      const query: any = {};
      if (search) {
        const regex = new RegExp(String(search), 'i');
        query.$or = [{ title: regex }, { country: regex }, { destinationName: regex }];
      }
      if (travelStyle && travelStyle !== 'all') {
        query.travelStyle = travelStyle;
      }
      if (featured === 'true') {
        query.featured = true;
      }
      if (maxPrice) {
        query.price = { $lte: Number(maxPrice) };
      }

      let packages = await PackageModel.find(query);
      if (packages.length === 0 && !search && (!travelStyle || travelStyle === 'all')) {
        await PackageModel.insertMany(INITIAL_PACKAGES as any);
        packages = await PackageModel.find(query);
      }
      return res.json(packages);
    }

    // Fallback in-memory
    let results = [...inMemoryPackages];

    if (search) {
      const q = String(search).toLowerCase();
      results = results.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q) ||
          p.destinationName.toLowerCase().includes(q)
      );
    }

    if (travelStyle && travelStyle !== 'all') {
      results = results.filter(p => p.travelStyle.toLowerCase() === String(travelStyle).toLowerCase());
    }

    if (featured === 'true') {
      results = results.filter(p => p.featured);
    }

    if (maxPrice) {
      results = results.filter(p => p.price <= Number(maxPrice));
    }

    return res.json(results);
  } catch (error) {
    console.error('Error fetching packages:', error);
    return res.status(500).json({ error: 'Failed to retrieve travel packages' });
  }
});

// GET /api/packages/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (isDatabaseConnected()) {
      const pkg = await PackageModel.findOne({ id } as any);
      if (pkg) {
        return res.json(pkg);
      }
    }

    const fallback = inMemoryPackages.find(p => p.id === id);
    if (!fallback) {
      return res.status(404).json({ error: 'Package not found' });
    }

    return res.json(fallback);
  } catch (error) {
    console.error('Error fetching package by ID:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
