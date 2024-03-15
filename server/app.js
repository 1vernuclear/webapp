const express = require('express');
require('dotenv').config();
const logger = require('./utils/logger'); // import logger
const connectDB = require('./utils/database'); 

const app = express();

connectDB();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
