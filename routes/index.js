const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/boards', require('./boards'));
router.use('/lists', require('./lists'));
router.use('/cards', require('./cards'));
module.exports = router;