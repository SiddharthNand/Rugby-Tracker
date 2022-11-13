const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');
const isLoggedIn = require('../config/auth');

router.get('/', playersCtrl.index);
router.get('/new', isLoggedIn, playersCtrl.new)
router.get('/:id', playersCtrl.show)
router.post('/', isLoggedIn, playersCtrl.create)
router.delete('/:id', isLoggedIn, playersCtrl.deletePlayers);

module.exports = router;