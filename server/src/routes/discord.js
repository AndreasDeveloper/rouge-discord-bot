// Imports
const router = require('express').Router();
const User = require('../db/schemas/User');
const { getBotGuilds } = require('../utils/api');
const { getMutualGuilds } = require('../utils/utils');
const GuildConfig = require('../db/schemas/GuildConfig');

// Get bot guilds / servers
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

// Update prefix
router.put('/guilds/:guildId/prefix', async (req, res) => {
    const { prefix } = req.body;
    const { guildId } = req.params;
    if (!prefix) return res.status(400).send({ msg: 'Prefix required' });
    const update = await GuildConfig.findOneAndUpdate({ guildId }, { prefix }, { new: true });
    if (update) {
        return res.send(update);
    } else {
        return res.status(400).send({ msg: 'Could not find document' });
    }
});

// 
router.get('/guilds/:guildId/config', async (req, res) => {
    const { guildId } = req.params;
    const config = await GuildConfig.findOne({ guildId });
    if (config) {
        return res.send(config);
    } else {
        return res.status(404).send({ msg: 'Not found' });
    }
});


// Exporting router
module.exports = router;