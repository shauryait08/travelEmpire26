import { Router, Request, Response } from 'express';
import { isDatabaseConnected } from '../config/db';
import { ContactModel } from '../models/Contact';
import { INITIAL_CONTACTS } from '../data/seedData';
import { ContactMessage } from '../../src/types/travel';

const router = Router();
let inMemoryContacts: ContactMessage[] = [...INITIAL_CONTACTS];

// GET /api/contact
router.get('/', async (_req: Request, res: Response) => {
  try {
    if (isDatabaseConnected()) {
      const messages = await ContactModel.find().sort({ createdAt: -1 });
      return res.json(messages);
    }
    return res.json(inMemoryContacts);
  } catch (error) {
    console.error('Error fetching contact inquiries:', error);
    return res.status(500).json({ error: 'Failed to retrieve inquiries' });
  }
});

// POST /api/contact
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, destinationPreference, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address provided.' });
    }

    const newMessage: ContactMessage = {
      id: `cnt-${Date.now()}`,
      name,
      email,
      phone: phone || '',
      destinationPreference: destinationPreference || 'General Inquiry',
      message,
      createdAt: new Date().toISOString()
    };

    if (isDatabaseConnected()) {
      const doc = new ContactModel(newMessage);
      await doc.save();
      return res.status(201).json({
        message: 'Your inquiry has been received. A travel specialist will contact you within 24 hours.',
        data: doc
      });
    }

    inMemoryContacts.unshift(newMessage);
    return res.status(201).json({
      message: 'Your inquiry has been received. A travel specialist will contact you within 24 hours.',
      data: newMessage
    });
  } catch (error) {
    console.error('Error handling contact message:', error);
    return res.status(500).json({ error: 'Internal server error while submitting inquiry' });
  }
});

export default router;
