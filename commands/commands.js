exports.run = (client, message, args) => {
    message.channel.send({embed: {
            color: 3447003,
            title: "General Commands",
            thumbnail: {
                url: "https://i.imgur.com/4AgMHOu.jpg"
            },
            fields: [{
                name: "**!ping**",
                value: "Sends a 'pong' to the channel."
                },
                {
                    name: "**!avatar**",
                    value: "Sends the user a link to their avatar or whoevers avatar they mention."
                },

            ],
        }
    });
    message.channel.send({embed: {
            color: 3447003,
            title: "Levels Commands",
            thumbnail: {
                url: "https://i.imgur.com/TOl5aRO.png"
            },
            fields: [
                {
                    name: "**!level**",
                    value: "Shows your current level and total number of EXP."
                },
            ],
        }
    });
    message.channel.send({embed: {
            color: 3447003,
            title: "Music Commands",
            thumbnail: {
                url: "https://i.imgur.com/KJ2Wckk.png"
            },
            fields: [
                {
                    name: "**!play** *file*",
                    value: "Joins your channel and plays specified file."
                },
                {
                    name: "**!stop**",
                    value: "Stops playing whatever is currently playing."
                },

            ],
        }
    });

};
