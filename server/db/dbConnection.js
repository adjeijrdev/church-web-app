import mongoose from 'mongoose'

export const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log('Connected to the Database successfully');
  } catch (error) {
    console.error('Error connecting to the Database:', error.message);
  }
};
