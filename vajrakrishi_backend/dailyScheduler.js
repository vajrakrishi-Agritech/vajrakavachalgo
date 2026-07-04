require("dotenv").config();

const generateAdvisory =
require("./vajrakavach_engine/advisoryEngine");

const connectDB = require("./src/config/db");

const Farmer = require("./src/models/Farmer");
const Report = require("./src/models/Report");

async function runScheduler() {

  await connectDB();

  console.log("Scheduler Started");

  const farmers = await Farmer.find();

  console.log(`Found ${farmers.length} farmers`);

  for (const farmer of farmers) {

  const lastReport = await Report.findOne({
    farmerId: farmer._id
  }).sort({ createdAt: -1 });

  if (!lastReport) {

  console.log(`${farmer.name} -> Generating first report`);

const advisory = await generateAdvisory({
  crop: farmer.crop,
  sowingDate: farmer.sowingDate,
  latitude: farmer.latitude,
  longitude: farmer.longitude,
  fieldCoordinates: farmer.fieldCoordinates || []
});

await Report.create({
  farmerId: farmer._id,
  farmerName: farmer.name,
  advisory,
  status: "Generated"
});

console.log(`${farmer.name} -> Report Created`);

  // generate report here

} else {

  const now = new Date();

  const diffDays =
    (now - lastReport.createdAt) /
    (1000 * 60 * 60 * 24);

  if (diffDays >= 1) {

    console.log(`${farmer.name} -> Generating new report`);

const advisory = await generateAdvisory({
  crop: farmer.crop,
  sowingDate: farmer.sowingDate,
  latitude: farmer.latitude,
  longitude: farmer.longitude,
  fieldCoordinates: farmer.fieldCoordinates || []
});

await Report.create({
  farmerId: farmer._id,
  farmerName: farmer.name,
  advisory,
  status: "Generated"
});

console.log(`${farmer.name} -> Report Created`);

  } else {

    console.log(
      `${farmer.name} -> Skip`
    );

  }

}

}
}

runScheduler();