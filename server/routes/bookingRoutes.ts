import { Router, Request, Response } from 'express';
import { isDatabaseConnected } from '../config/db';
import { BookingModel } from '../models/Booking';
import { INITIAL_BOOKINGS } from '../data/seedData';
import { BookingRequest } from '../../src/types/travel';

const router = Router();
let inMemoryBookings: BookingRequest[] = [...INITIAL_BOOKINGS];

// GET /api/bookings
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isDatabaseConnected()) {
      const bookings = await BookingModel.find().sort({ createdAt: -1 });
      return res.json(bookings);
    }
    return res.json(inMemoryBookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({ error: 'Failed to retrieve bookings' });
  }
});

// POST /api/bookings
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      phone,
      destinationOrPackageId,
      itemType,
      itemTitle,
      startDate,
      guests,
      roomType,
      flightIncluded,
      specialRequests,
      totalPrice
    } = req.body;

    if (!fullName || !email || !phone || !startDate || !guests) {
      return res.status(400).json({
        error: 'Missing required booking fields (fullName, email, phone, startDate, guests are required).'
      });
    }

    const newBooking: BookingRequest = {
      id: `bkg-${Date.now()}`,
      fullName,
      email,
      phone,
      destinationOrPackageId: destinationOrPackageId || 'general',
      itemType: itemType || 'destination',
      itemTitle: itemTitle || 'Custom Vacation',
      startDate,
      guests: Number(guests) || 1,
      roomType: roomType || 'deluxe',
      flightIncluded: Boolean(flightIncluded),
      specialRequests: specialRequests || '',
      totalPrice: Number(totalPrice) || 0,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    if (isDatabaseConnected()) {
      const doc = new BookingModel(newBooking);
      await doc.save();
      return res.status(201).json({
        message: 'Booking confirmed successfully',
        booking: doc
      });
    }

    inMemoryBookings.unshift(newBooking);
    return res.status(201).json({
      message: 'Booking confirmed successfully (in-memory mode)',
      booking: newBooking
    });
  } catch (error) {
    console.error('Error saving booking:', error);
    return res.status(500).json({ error: 'Internal server error while processing booking' });
  }
});

export default router;
