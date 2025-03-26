import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected".bgGreen.white);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

export default connectDB;