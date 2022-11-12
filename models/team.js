const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const teamSchema = new Schema({
    country: String,
    topPlayers: String,
    wins: Number,
    losses: Number
});

module.exports = mongoose.model('Team', teamSchema)


