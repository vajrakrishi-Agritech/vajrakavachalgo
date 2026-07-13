function generateReport(data) {
  console.log("===== REPORT DEBUG =====");
  console.log(data.pests);

  let todayAction = "";

  if (data.pests.reportMode === "ESTABLISHMENT") {
    todayAction = data.pests.todayPriority;
  } else {
    todayAction = `Inspect ${data.pests.primaryConcern} symptoms starting from the ${data.scout.startSide} side of the field.`;
  }
  return {
    crop: data.crop,

    das: data.das,

    stage: data.stage,

    season: data.season,

    temperature: data.weather.temperature,

    humidity: data.weather.humidity,

    rainfall: data.weather.rainfall,

    windDirection: data.weather.windDirection,

    risk: data.risk.risk,

    riskScore: data.risk.score,

    reasons: data.risk.reasons,

    todayPriority: data.pests.todayPriority,

    recommendedActions: data.pests.recommendedActions,

    reportMode: data.pests.reportMode,

    showPestSection: data.pests.showPestSection,

    showDiseaseSection: data.pests.showDiseaseSection,

    showScoutSection: data.pests.showScoutSection,

    primaryConcern: data.pests.primaryConcern,

    secondaryConcern: data.pests.secondaryConcern,

    majorDisease: data.pests.majorDisease,

    scoutingFocus: data.pests.scoutingFocus,

    precaution: data.pests.precaution,

    scoutStartSide: data.scout.startSide,

    scoutCoordinates: data.scout.primaryPoints,
    todayAction,
  };
}

module.exports = generateReport;
