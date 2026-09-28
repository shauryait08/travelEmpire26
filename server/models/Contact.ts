import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  destinationPreference?: string;
  message: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  destinationPreference: { type: String },
  message: { type: String, required: true }
}, {
  timestamps: true
});

export const ContactModel = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
