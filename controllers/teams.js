const Team = require('../models/team');
// const Player = require('../models/player')

module.exports = {
    index,
    new: newTeam,
    create,
    show,
    deleteTeam,
}

function index(req, res) {
    Team.find({}, function(err, teams){
        res.render('teams/index', {title: 'All Teams', teams });
    });
}

function show(req, res) {
    Team.findById(req.params.id, function(err, team) {
        res.render('teams/show', { title: 'Team Details', team})
        if (err) 
            return res.redirect('/teams')
    });   
}

function newTeam(req, res) {
    res.render('teams/new', { title: 'Add Team' });
}

function create(req, res) {
    let team = new Team(req.body);
    team.save(function(err) {
        if (err) return res.redirect('/new');
        console.log(team);
        res.redirect('/teams');
    });
}

  function deleteTeam(req, res) {
    Team.findOne({'_id': req.params.id}).then(function(team) {
      team.remove();
        res.redirect('/teams');
      });
}
