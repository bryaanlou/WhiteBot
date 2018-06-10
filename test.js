const sql = require("sqlite");
sql.open("./score.sqlite");

sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    test = Math.floor(0.6 * Math.sqrt(row.points + 1));
    console.log(test);
});