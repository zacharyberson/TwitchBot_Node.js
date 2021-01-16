const { client } = require('./clientHelper.js');
const { intervalMessages } = require('./messageScheduler.js');
const commands = require('./messageParser.js');

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(channel, userstate, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const command = msg.trim();
    console.log('> ' + msg);

    commands.processCommand(channel, userstate, command);
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);

    //schedule timer messages
    setTimeout(()=>{
        intervalMessages(client.lastJoined);
    }, 1000);
}