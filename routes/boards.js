const express = require('express');
const router = express.Router();
const passport = require('passport');

const boardsController = require('../controllers/boards_controller');


router.post('/create', passport.checkAuthentication,boardsController.create);
router.get('/:id',passport.checkAuthentication,boardsController.dashBoard);











module.exports = router;