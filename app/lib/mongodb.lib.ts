import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URL !; 


let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
     // Log the Mongo URI for debugging

    await mongoose.connect(MONGO_URI);

    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);  // Exit process with failure
  }
};
