const Player = require('../models/player')

module.exports = {
    index,
    new: newPlayer,
    create,
    show,
}

function index(req, res) {
    Player.find({}, function(err, players){
        res.render('players/index', {title: 'All Players', players });
    });
}

function show(req, res) {
    Player.findById(req.params.id, function(err, team) {
        res.render('players/show', { title: 'Player Details', team})
        if (err) 
            return res.redirect('/players')
    });   
}

function newPlayer(req, res) {
    res.render('players/new', { title: 'Add Player' });
}

function create(req, res) {
    console.log(req.body)
    let player = new Player(req.body);
    player.save(function(err) {
        if (err) return res.redirect('/new');
        console.log(player);
        res.redirect('/players');
    });
  };
