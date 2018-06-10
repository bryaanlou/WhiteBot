exports.run = (client, message, args) => {
    const songName = args[0];
    const voiceChannel = message.member.voiceChannel;
        if (voiceChannel) {
            voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                    const dispatcher = connection.playFile('Songs/' + songName + '.mp3');
                    dispatcher.on("end", end => {
                        voiceChannel.leave();
                    });
                })
                .catch(console.log);
        } else
            message.reply('You need to join a voice channel first!');
}