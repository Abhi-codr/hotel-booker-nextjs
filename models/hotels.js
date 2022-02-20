import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { required: true, type: String },
  address: { type: String },
  location: { type: String },
  rooms: { type: [mongoose.Schema.Types.ObjectId] },
});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
