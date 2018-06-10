/*
    Level system.
 */

const sql = require("sqlite");
sql.open("./score.sqlite");

exports.run = async (client, message) => {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        message.reply(`you are currently level ${row.level} and have ${row.points} EXP.`);
    });
};

