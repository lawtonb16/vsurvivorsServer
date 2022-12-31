const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const powerUpSchema = new Schema(
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

const PowerUp = mongoose.model("PowerUp", powerUpSchema);

module.exports = PowerUp;
