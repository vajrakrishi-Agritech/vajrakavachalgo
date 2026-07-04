const cropKnowledge = require("./knowledge/cropKnowledge.json");

function getCandidatePests(crop, stage) {

    const record = cropKnowledge.find(

        item =>
            item.crop.toLowerCase() === crop.toLowerCase() &&
            item.stage === stage
        
        
    );

    if (!record) {

        return {

            primaryConcern: "General Monitoring",

            secondaryConcern: "",

            majorDisease: "",

            scoutingFocus: "",

            precaution: ""
        };
    }

    return {

        primaryConcern: record.primaryPest,

        secondaryConcern: record.secondaryPest,

        majorDisease: record.majorDisease,

        scoutingFocus: record.scoutingFocus,

        precaution: record.precautions
    };
}

module.exports = getCandidatePests;