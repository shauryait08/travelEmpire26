import { SAMPLE_DESTINATIONS, SAMPLE_PACKAGES, SAMPLE_REVIEWS } from '../../src/data/travelData';
import { BookingRequest, ContactMessage } from '../../src/types/travel';

export const INITIAL_DESTINATIONS = [...SAMPLE_DESTINATIONS];
export const INITIAL_PACKAGES = [...SAMPLE_PACKAGES];
export const INITIAL_REVIEWS = [...SAMPLE_REVIEWS];

export const INITIAL_BOOKINGS: BookingRequest[] = [
  {
    id: 'bkg-101',
    fullName: 'Charlotte Dubois',
    email: 'charlotte@example.com',
    phone: '+33 6 12 34 56 78',
    destinationOrPackageId: 'pkg-alpine-wonders',
    itemType: 'package',
    itemTitle: 'Alpine Grandeur & Glacier Express',
    startDate: '2026-06-15',
    guests: 2,
    roomType: 'suite',
    flightIncluded: true,
    specialRequests: 'Celebrating 10th anniversary; high floor room with Matterhorn view preferred.',
    totalPrice: 4798,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  }
];

export const INITIAL_CONTACTS: ContactMessage[] = [
  {
    id: 'cnt-101',
    name: 'Alexander Wright',
    email: 'alex.wright@example.com',
    phone: '+1 415 555 0192',
    destinationPreference: 'Japan',
    message: 'Looking for a private 12-day customized family tour including Tokyo, Kyoto and Hakone with private onsen for Autumn 2026.',
    createdAt: new Date().toISOString()
  }
];
