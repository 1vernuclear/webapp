require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('./logger');

const dbConnectionUrl = process.env.DATABASE_URL; // Use an environment variable for the DB connection string

const connectDB = async () => {
    try {
        await mongoose.connect(dbConnectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info('MongoDB Connected...');
    } catch (err) {
        logger.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
