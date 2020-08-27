// Imports
require('dotenv').config();
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const client = new Client();
const mongoose = require('mongoose');

// Connect to DB
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
});

// Init
(async () => {
  client.commands = new Map();
  client.events = new Map();
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();

