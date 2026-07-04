function calculateRisk(record, weather, season) {

    let score = 0;

    let reasons = [];

    // Stage Importance

    if (record.stageImportance === "Critical") {

        score += 3;

        reasons.push("Critical crop stage");
    }
    else if (record.stageImportance === "High") {

        score += 2;
    }
    else {

        score += 1;
    }

    // Humidity

    if (weather.humidity > 75) {

        score += 3;

        reasons.push("High humidity");
    }
    else if (weather.humidity > 60) {

        score += 2;
    }
    else {

        score += 1;
    }

    // Season Sensitivity

    if (record.seasonSensitivity === "Very High") {

        score += 3;

        reasons.push("Very favorable season");
    }
    else if (record.seasonSensitivity === "High") {

        score += 2;
    }
    else {

        score += 1;
    }

    let risk;

    if (score >= 8)
        risk = "HIGH";

    else if (score >= 5)
        risk = "MEDIUM";

    else
        risk = "LOW";

    return {

        score,

        risk,

        reasons
    };
}

module.exports = calculateRisk;