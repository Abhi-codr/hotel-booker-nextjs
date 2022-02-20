import mongoose from "mongoose";

const connection = {};

const connectDb = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.DB_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
};

export default connectDb;
