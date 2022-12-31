const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pickUpSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        effect: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const PickUp = mongoose.model("PickUp", pickUpSchema);

module.exports = PickUp;
