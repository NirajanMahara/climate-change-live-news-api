const PORT = process.env.PORT || 8000;
const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');

const app = express();

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
