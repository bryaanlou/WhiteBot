/*
    Sends the user a link to their avatar or someone else's.
 */

exports.run = (client, message, args) => {
    if(!args[0])
        message.reply(message.author.avatarURL);
    else
        message.reply(message.mentions.users.first().avatarURL);
};