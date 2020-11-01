const http = require('http');
const server = 'http://' + process.env.LOCAL_SERVER;

const sendCommand = (command) => {
    console.log(`Sending command "' + command + '" to ${server}`);
    http.get(new URL('/' + command, server), (resp)=>{
        const { statusCode } = resp;

        let error;
        if(statusCode === 200) {
            console.log(`Sent command "${command}" to ${server}`);
        } else {
            error = new Error(`Failed to send command "' + command + '" to ${server}\n` + 
                               `Status Code: ${statusCode}`);
        }

        if(error) {
            console.error(e);
            // Consume response data to free up memory
            resp.resume();
            throw error;
        }
    }).on('error', (e) => {
        console.error(`Failed to send command "' + command + '" to ${server}\n` + 
                      `Error: ${error.message}`);
        
    });
};

exports.sendCommand = sendCommand;