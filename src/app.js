const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
// TODO: configure cors
app.use(cors());

app.get('/test', (req, res) => {
  res.status(200).send('Proverbs backend test OK');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${PORT}`);
  }
});

module.exports = app;
