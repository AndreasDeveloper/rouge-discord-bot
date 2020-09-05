// Imports
require('dotenv').config();
require('./strategies/discord');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const Store = require('connect-mongo')(session);

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

// Express session
app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    resave: false,
    saveUninitialized: false,
    store: new Store({ mongooseConnection: mongoose.connection })
}));

// Init Passport
app.use(passport.initialize());
app.use(passport.session());

// Set routes
app.use('/api', routes);

// Listen the app
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
