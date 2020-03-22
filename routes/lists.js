const express = require('express');
const router = express.Router();
const passport = require('passport');

const listsController = require('../controllers/lists_controller');


router.post('/create', passport.checkAuthentication,listsController.create);











module.exports = router;