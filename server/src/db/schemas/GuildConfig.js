// Imports
const mongoose = require('mongoose');

// Creating schema
const GuildConfigSchema = new mongoose.Schema({
    guildId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    prefix: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: '!'
    },
    defaultRole: {
        type: mongoose.SchemaTypes.String,
        required: false
    },
    memberLogChannel: {
        type: mongoose.SchemaTypes.String,
        required: false
    }
});

// Create & Export model
module.exports = mongoose.model('GuildConfig', GuildConfigSchema);