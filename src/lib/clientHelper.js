const tmi = require('tmi.js');

// Define configuration options
const opts = {
    identity: {
        username: process.env.T_USER,
        password: process.env.T_PASS
    },
    channels: [
        process.env.T_CHANNEL
    ]
};
// Create a client with our options
const client = new tmi.client(opts);

module.exports = {client};