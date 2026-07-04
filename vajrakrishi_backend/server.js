require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./src/config/db");

const app = express();

app.use(cors());
app.use(express.json());
const farmerRoutes = require("./src/routes/farmerRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
app.use("/api/farmers", farmerRoutes);
app.use("/api/reports", reportRoutes);
connectDB();

app.get("/", (req, res) => {
  res.send("Vajrakavach Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});