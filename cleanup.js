import mongoose from "mongoose";

// Define the MongoDB connection string and database name
const uri ='mongodb+srv://ntihinduka:ntihinduka@cluster0.i5jwzd6.mongodb.net/mybrandtest?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
const cleanup = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true });
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
};

export default cleanup()
