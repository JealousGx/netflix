const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: Number },
    content: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
