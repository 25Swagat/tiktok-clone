import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//Collection inside the database
export default mongoose.model("tiktokvideos", tiktokSchema);
// module.exports = mongoose.model("tiktokVideos", tiktokSchema);
