// Imports
const router = require('express').Router();
const User = require('../db/schemas/User');
const { getBotGuilds } = require('../utils/api');
const { getMutualGuilds } = require('../utils/utils');

router.get('/guilds', async (req, res) => {
    const guilds = await getBotGuilds();
    const user = await User.findOne({ discordId: req.user.discordId });
    if (user) {
        const userGuilds = user.get('guilds');
        const mutualGuilds = getMutualGuilds(userGuilds, guilds);

        res.send(mutualGuilds);
    } else {
        return res.status(401).send({ msg: 'Unauthorized' });
    }
});



// Exporting router
module.exports = router;