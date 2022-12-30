const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passiveSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    maxLevel: {
        type: Number,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    effects: {
        type: String,
        required: true
    },
    unlock: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
});

const Passive = mongoose.model("Passive", passiveSchema);

module.exports = Passive;