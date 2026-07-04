const express = require("express");
const router = express.Router();

const Farmer = require("../models/Farmer");

router.post("/", async (req, res) => {
  try {
    const farmer = await Farmer.create(req.body);

    res.status(201).json({
      success: true,
      data: farmer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const farmers = await Farmer.find();

    res.json({
      success: true,
      count: farmers.length,
      data: farmers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});
// Update Farmer
router.put("/:id", async (req, res) => {
    try {
  
      const farmer = await Farmer.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );
  
      if (!farmer) {
        return res.status(404).json({
          success: false,
          message: "Farmer not found"
        });
      }
  
      res.json({
        success: true,
        data: farmer
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message: error.message
      });
  
    }
  });

  // Get single farmer
router.get("/:id", async (req, res) => {
  try {

    const farmer = await Farmer.findById(req.params.id);

    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: "Farmer not found"
      });
    }

    res.json({
      success: true,
      data: farmer
    });

  } catch (error) {
    
    console.error("REPORT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});

module.exports = router;