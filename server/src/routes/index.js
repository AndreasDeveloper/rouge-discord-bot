// Imports
const router = require('express').Router();
const auth = require('./auth');
const discord = require('./discord');

router.use('/auth', auth);
router.use('/discord', discord);

// Exporting router
module.exports = router;