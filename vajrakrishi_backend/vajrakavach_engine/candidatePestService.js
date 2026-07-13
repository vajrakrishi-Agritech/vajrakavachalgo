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

        precaution: "",

        todayPriority: "General crop monitoring.",

        recommendedActions: [],

        reportMode: "EARLY_MONITORING",

        showPestSection: true,

        showDiseaseSection: true,

        showScoutSection: true
        };
    }

    return {

        primaryConcern: record.primaryPest,

    secondaryConcern: record.secondaryPest,

    majorDisease: record.majorDisease,

    scoutingFocus: record.scoutingFocus,

    precaution: record.precautions,

    // New Advisory Fields
    todayPriority: record.todayPriority,

    recommendedActions: record.recommendedActions,

    reportMode: record.reportMode,

    showPestSection: record.showPestSection,

    showDiseaseSection: record.showDiseaseSection,

    showScoutSection: record.showScoutSection
    };
}

module.exports = getCandidatePests;