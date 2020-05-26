let express = require("express"),
    http = require("http"),
    app = require("express")(),
    server = http.createServer(app),
    bodyParser = require("body-parser");

const PORT = process.env.PORT || 8001;


console.log("Server started");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all("/*", function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,X-Access-Token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

app.get("/", function(req, res) {
    res.send("Sms Server Online.");
});


server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));