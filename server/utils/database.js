require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('./logger');

const dbConnectionUrl = process.env.DATABASE_URI; // Use an environment variable for the DB connection string

const connectDB = () => {
    return mongoose.connect(dbConnectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        logger.info('MongoDB Connected...');
    }).catch(err => {
        const errormessage = 'failed connecting to mongodb'
        logger.error(errormessage);
        // Exit process with failure
        process.exit(1);
    });
};

module.exports = connectDB;
