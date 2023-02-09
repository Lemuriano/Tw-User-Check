const express = require('express');
const tweetRoutes = require('./routes/tweet');

const app = express();

app.use('/tweet/:username', tweetRoutes.checkAccountStatus);

module.exports = app