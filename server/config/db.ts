import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async (): Promise<boolean> => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travel_db';
  
  try {
    // Attempt fast connection with a 2.5 second timeout so app boots immediately if no local MongoDB instance
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2500,
    });
    isConnected = true;
    console.log(`[MongoDB] Successfully connected to database: ${mongoose.connection.host}`);
    return true;
  } catch (error) {
    isConnected = false;
    console.warn(`[MongoDB] Notice: Could not connect to MongoDB at ${mongoUri}. The app will seamlessly utilize the in-memory persistent database store. To connect a live MongoDB instance, supply MONGODB_URI in your .env or Docker environment.`);
    return false;
  }
};

export const isDatabaseConnected = (): boolean => isConnected;
