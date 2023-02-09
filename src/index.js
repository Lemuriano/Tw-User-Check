const express = require('express');
const tweetRoutes = require('./routes/tweet');

const app = express();

app.use('/tweet/:username', tweetRoutes.checkAccountStatus);

app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});