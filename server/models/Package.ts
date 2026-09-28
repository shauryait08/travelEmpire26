import mongoose, { Schema, Document } from 'mongoose';

export interface IPackage extends Document {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  country: string;
  durationDays: number;
  durationNights: number;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  travelStyle: string;
  includedActivities: string[];
  hotelInfo: {
    name: string;
    type: string;
    ratingStars: number;
    description: string;
  };
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded: string[];
  featured: boolean;
  createdAt: Date;
}

const PackageSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  destinationId: { type: String, required: true },
  destinationName: { type: String, required: true },
  country: { type: String, required: true },
  durationDays: { type: Number, required: true },
  durationNights: { type: Number, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 5.0 },
  reviewsCount: { type: Number, default: 0 },
  image: { type: String, required: true },
  travelStyle: { type: String, default: 'Luxury' },
  includedActivities: [{ type: String }],
  hotelInfo: {
    name: { type: String },
    type: { type: String },
    ratingStars: { type: Number },
    description: { type: String }
  },
  itinerary: [{
    day: { type: Number },
    title: { type: String },
    description: { type: String }
  }],
  included: [{ type: String }],
  notIncluded: [{ type: String }],
  featured: { type: Boolean, default: false }
}, {
  timestamps: true
});

export const PackageModel = mongoose.models.Package || mongoose.model<IPackage>('Package', PackageSchema);
