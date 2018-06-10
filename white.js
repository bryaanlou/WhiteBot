// Import the discord.js module
const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./score.sqlite");

// Log to show if Bot is ready.
client.on('ready', () => {
    console.log('White is on.');
    client.user.setActivity('created by Embracing')
});


// Responds to messages
client.on("message", message => {
    // No responding to bots.
    if (message.author.bot) return;

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        } else {
            let curLevel = Math.floor(0.6*Math.sqrt(row.points + 1));
            if (curLevel > row.level) {
                row.level = curLevel;
                sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
                message.reply(`you've leveled up to level **${curLevel}**!`);
            }
            sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
        }
    }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        });
    });

    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Pulls command from /commands/ and runs them
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.on('guildMemberAdd', member => {

    // Shoots a welcome message to new members
    var channel = member.guild.channels.find('name', 'general');
    if (!channel || !backup) return;       // Do nothing if the channel wasn't found on this server
    channel.send(`Welcome to ${member.guild.name}, ${member}!`);
});

client.login(config.token);