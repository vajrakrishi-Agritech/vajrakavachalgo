const cropKnowledge = require("./knowledge/cropKnowledge.json");

function getStage(crop, das) {

    const record = cropKnowledge.find(

        item =>
            item.crop.toLowerCase() === crop.toLowerCase() &&
            das >= item.DASStart &&
            das <= item.DASEnd

    );

    if (record) {

        return record.stage;
    }

    return "Unknown Stage";
}

module.exports = getStage;