import mongoose, { Schema, Document } from 'mongoose';

export interface IDestination extends Document {
  id: string;
  name: string;
  city: string;
  country: string;
  region: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImages: string[];
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  popularActivities: string[];
  estimatedBudget: {
    backpacker: number;
    midRange: number;
    luxury: number;
  };
  recommendedHotels: {
    name: string;
    stars: number;
    pricePerNight: number;
    amenities: string[];
  }[];
  tag: string;
  featured: boolean;
  createdAt: Date;
}

const DestinationSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 5.0 },
  reviewsCount: { type: Number, default: 0 },
  image: { type: String, required: true },
  secondaryImages: [{ type: String }],
  description: { type: String, required: true },
  highlights: [{ type: String }],
  bestTimeToVisit: { type: String },
  popularActivities: [{ type: String }],
  estimatedBudget: {
    backpacker: { type: Number, default: 50 },
    midRange: { type: Number, default: 150 },
    luxury: { type: Number, default: 450 }
  },
  recommendedHotels: [{
    name: { type: String },
    stars: { type: Number },
    pricePerNight: { type: Number },
    amenities: [{ type: String }]
  }],
  tag: { type: String },
  featured: { type: Boolean, default: false }
}, {
  timestamps: true
});

export const DestinationModel = mongoose.models.Destination || mongoose.model<IDestination>('Destination', DestinationSchema);
