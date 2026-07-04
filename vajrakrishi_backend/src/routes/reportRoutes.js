const express = require("express");
const router = express.Router();

const Farmer = require("../models/Farmer");
const Report = require("../models/Report");

const generateAdvisory = require("../../vajrakavach_engine/advisoryEngine");

// Generate Reports
router.post("/generate/:farmerId", async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.farmerId);

    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: "Farmer not found",
      });
    }

    const advisory = await generateAdvisory({
      crop: farmer.crop,
      sowingDate: farmer.sowingDate,
      latitude: farmer.latitude,
      longitude: farmer.longitude,
      fieldCoordinates: farmer.fieldCoordinates || [],
    });

    const report = await Report.create({
      farmerId: farmer._id,
      farmerName: farmer.name,
      advisory,
      status: "Generated",
    });

    res.json({
      success: true,
      data: report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();

    res.json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/test", (req, res) => {
  res.send("Report Route Working");
});

router.get("/farmer/:farmerId", async (req, res) => {
  try {
    const reports = await Report.find({
      farmerId: req.params.farmerId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    res.json({
      success: true,
      data: report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
