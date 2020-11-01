process.on('uncaughtException', err=> {
    console.error('There was an uncaught error', err);
    process.exit(1);
})

const envConfig = require('dotenv').config();
if(envConfig.error) {
    console.error("Could not load properties from .env file.");
    throw envConfig.error;
}

var bot = require('./lib/bot.js');