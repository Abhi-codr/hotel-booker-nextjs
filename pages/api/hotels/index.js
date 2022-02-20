import Hotel from "../../../models/hotels";
import connectDb from "../../../utils/connectDb";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      const hotels = await Hotel.find({});
      res.status(200).json({ status: "success", data: hotels });
      break;
    default:
      res.status(404).json({ status: "failure", message: "route not found" });
  }
};

export default handler;
