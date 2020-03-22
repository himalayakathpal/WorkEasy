const express = require('express');
const router = express.Router();
const passport = require('passport');

const cardsController = require('../controllers/cards_controller');


router.post('/create', passport.checkAuthentication,cardsController.create);











module.exports = router;