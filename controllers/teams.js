const Team = require('../models/team');

module.exports = {
    index,
    new: newTeam,
    create,
    show,
    deleteTeam,
    update,
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
    console.log(req.body)
    team.save(function(err) {
        if (err) return res.redirect('/new');
        console.log(team);
        res.redirect('/teams');
    });
}

  function deleteTeam(req, res) {
    Team.findOne({'_id': req.params.id})
    .then(function(team) {
      team.remove();
        res.redirect('/teams');
      });
}

function update(req, res) {
    const form = JSON.parse(JSON.stringify(req.body))
    console.log(form)
    Team.findByIdAndUpdate(req.params.id, form, {new:true})
    .then(function(team) {
        team.save()
    })
    res.redirect('/teams');
}


