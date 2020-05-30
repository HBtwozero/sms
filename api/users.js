const app = require("express")();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const Datastore = require("nedb");
const btoa = require('btoa');
app.use(bodyParser.json());

module.exports = app;


let usersDB = new Datastore({
    filename: process.env.APPDATA + "/sms/server/databases/users.db",
    autoload: true
});


usersDB.ensureIndex({ fieldName: '_id', unique: true });


app.get("/", function(req, res) {
    res.send("Users API");
});