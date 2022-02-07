const express = require('express');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(
  mongoSanitize({
    replaceWith: '_',
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

// Ping
app.get('/', (req, res) => {
  try {
    res.status(200).send('Ping');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use('/users', require('./controllers/user.controller'));
