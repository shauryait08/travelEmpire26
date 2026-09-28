import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  fullName: string;
  email: string;
  phone: string;
  destinationOrPackageId: string;
  itemType: 'destination' | 'package';
  itemTitle: string;
  startDate: string;
  guests: number;
  roomType: string;
  flightIncluded: boolean;
  specialRequests?: string;
  totalPrice: number;
  status: string;
  createdAt: Date;
}

const BookingSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  destinationOrPackageId: { type: String, required: true },
  itemType: { type: String, enum: ['destination', 'package'], required: true },
  itemTitle: { type: String, required: true },
  startDate: { type: String, required: true },
  guests: { type: Number, required: true, min: 1 },
  roomType: { type: String, default: 'deluxe' },
  flightIncluded: { type: Boolean, default: false },
  specialRequests: { type: String },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'confirmed' }
}, {
  timestamps: true
});

export const BookingModel = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
