// Imports
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(200);
});

// Exporting router
module.exports = router;