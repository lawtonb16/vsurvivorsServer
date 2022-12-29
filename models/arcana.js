const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arcanaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weapon: {
        type: String,
        required: true
    },
    passive: {
        type: String,
        required: true
    },
    unlock: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    baseStats: {
        type: Object,
        required: true
    },
    secret: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Arcana = mongoose.model("Arcana", arcanaSchema);

module.exports = Arcana;