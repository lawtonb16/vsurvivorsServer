const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enemySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    stages: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ""
    },
    
}, {
    timestamps: true
});

const Enemy = mongoose.model("Enemy", enemySchema);

module.exports = Enemy;