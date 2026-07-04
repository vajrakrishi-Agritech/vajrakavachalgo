const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
    },

    farmerName: String,

    advisory: {
      type: Object,
      required: true,
    },

    status: {
      type: String,
      default: "Generated",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Report", ReportSchema);
