const { client } = require('./clientHelper.js');
const { NumUtil } = require('./utility.js');

const rollDice = (target, query) => {
    const sides = NumUtil.isInt(query) ? +query : 6;
    const num = Math.floor(Math.random() * sides) + 1;
    client.say(target, `You rolled a ${num}`);
}

const test = (target, query) => {
    client.say(target, 'This is a test command.');
}

const woah = (target, query) => {
    client.say(target, 'This is the woah command.')
}

exports.commands = {
    '!dice': rollDice,
    '!test': test,
    '!woah': woah
};