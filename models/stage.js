const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        unlockNormal: {
            type: String,
            required: true,
        },
        unlockHyper: {
            type: String,
            required: true,
        },
        stageItems: {
            type: String,
            default: "None"
        },
        relics: {
            type: String,
            default: "None"
        },
        coffins: {
            type: String,
            default: "None"
        },
        hidden: {
            type: String,
            default: "None"
        }
    },
    {
        timestamps: true,
    },
);

const Stage = mongoose.model("Stage", stageSchema);

module.exports = Stage;