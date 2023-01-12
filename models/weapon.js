const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weaponSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        effect: {
            type: String,
            required: true,
        },
        unlock: {
            type: String,
            required: true,
        },
        evolution: {
            type: String,
            default: "None"
        }
    },
    {
        timestamps: true,
    },
);

const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;