const mongoose = require('mongoose')
const Scheme = mongoose.Schema; 

const teamSchema = new Schema({
    country: {
        type: String
    }, 
    topPlayers: {
        type: String
    },
    wins: {
        type: Number
    },
    losses: {
        type: Number
    }
});

module.exports = mongoose.model('Team', movieSchema)