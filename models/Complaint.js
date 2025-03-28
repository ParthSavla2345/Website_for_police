const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  incidentName: { type: String, required: true },
  address: { type: String, required: true },
  file: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", ComplaintSchema);
