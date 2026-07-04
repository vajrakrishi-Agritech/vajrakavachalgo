const calculateDAS = require("./calculateDas");
const getStage = require("./stageService");
const getSeason = require("./seasonService");
const getWeather = require("./weatherService");
const getCandidatePests = require("./candidatePestService");
const calculateRisk = require("./riskEngine");
const getFieldEdges = require("./fieldEngine");
const getScoutDirection = require("./windEngine");
const generateReport = require("./reportGenerator");

async function generateAdvisory(farmerData) {

    const das = calculateDAS(farmerData.sowingDate);

    const stage = getStage(farmerData.crop, das);

    const season = getSeason();

    const weather = await getWeather(
        farmerData.latitude,
        farmerData.longitude
    );

    const edges = getFieldEdges(
    farmerData.fieldCoordinates
  );

   const scout = getScoutDirection(
    weather.windDirection,
    edges
);

    const pests = getCandidatePests(
        farmerData.crop,
        stage
    );

    const risk = calculateRisk(
        stage,
        season,
        weather
    );

    
    return generateReport({
        crop: farmerData.crop,
        das,
        stage,
        season,
        weather,
        pests,
        risk,
        scout
    });
}

module.exports = generateAdvisory;