// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate

// Imports
const BaseEvent = require('../utils/structures/BaseEvent');
const GuildConfig = require('../db/schemas/GuildConfig');

// Add joined bot to DB
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) {
    try {
      const guildConfig = await GuildConfig.create({
        guildId: guild.id
      });
    } catch (err) {
      console.log(err);
    }
  }
}