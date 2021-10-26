const PORT = process.env.PORT || 8000;
const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.json('Welcome to Climate Change Live News API');
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
