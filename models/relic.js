const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relicSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        effect: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Relic = mongoose.model("Relic", relicSchema);

module.exports = Relic;