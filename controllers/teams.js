const Team = require('../models/team');
const Player = require('../models/player')

module.exports = {
    index,
    // show,
    new: newTeam,
}

function index(req, res) {
    Team.find({}, function(err, teams){
        res.render('teams/index', {title: 'All Teams'. teams });
    });
}

// function show 

function newTeam(req, res) {
    res.render('teams/new', { title: 'Add Team' });
}

// function create 

