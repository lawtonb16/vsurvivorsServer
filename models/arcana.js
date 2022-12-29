const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arcanaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    effect: {
        type: String,
        required: true
    },
    unlock: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Arcana = mongoose.model("Arcana", arcanaSchema);

module.exports = Arcana;