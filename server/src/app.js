// Imports
require('dotenv').config();
require('./strategies/discord');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/index');

// Set PORT
const PORT = process.env.PORT || 3002;

// Connect to DB
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
});

// Init Passport
app.use(passport.initialize());
app.use(passport.session());

// Set routes
app.use('/api', routes);

// Listen the app
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
