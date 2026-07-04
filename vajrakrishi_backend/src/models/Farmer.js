const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    village: String,
    crop: String,
    variety: String,
    sowingDate: Date,

    latitude: Number,
    longitude: Number,

    fieldCoordinates: {
        type: [[Number]],
        default: []
    },
     
    
    
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Farmer", FarmerSchema);