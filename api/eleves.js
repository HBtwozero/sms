const app = require("express")();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const Datastore = require("nedb");
const async = require("async");
const fileUpload = require('express-fileupload');
const multer = require("multer");
const fs = require('fs');


const storage = multer.diskStorage({
    destination: process.env.APPDATA + '/sms/uploads',
    filename: function(req, file, callback) {
        callback(null, Date.now() + '.jpg'); // 
    }
});


let upload = multer({ storage: storage });



app.use(bodyParser.json());

module.exports = app;



let eleveDB = new Datastore({
    filename: process.env.APPDATA + "/sms/server/databases/eleves.db",
    autoload: true
})

eleveDB.ensureIndex({ fieldName: '_id', unique: true });

app.get("/", function(req, res) {
    res.send("Eleve API");
});

app.get("/eleve/:eleveId", function(req, res) {
    if (!req.params.eleveId) {
        res.status(500).send("ID field is required.");
    } else {
        eleveDB.findOne({
            _id: req.params.eleveId
        }, function(err, eleve) {
            res.send(eleve);
        });
    }
});


app.get("/eleves", function(req, res) {
    eleveDB.find({}, function(err, docs) {
        res.send(docs);
    });
});


app.post("/eleve", upload.single('imagename'), function(req, res) {

    let image = '';

    if (req.body.img != "") {
        image = req.body.img;
    }

    if (req.file) {
        image = req.file.filename;
    }

    if (req.body.remove == 1) {
        const path = './resources/app/public/uploads/eleve_image/' + req.body.img;
        try {
            fs.unlinkSync(path)
        } catch (err) {
            console.error(err)
        }

        if (!req.file) {
            image = '';
        }
    }

    let Eleve = {
        _id: parseInt(req.body.id),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        religion: req.body.religion,
        email: req.body.email,
        class: req.body.class,
        section: req.body.section,
        phone: req.body.phone,
        shortbio: req.body.shortbio,
        img: image
    }

    if (req.body.id == "") {
        Eleve._id = Math.floor(Date.now() / 1000);
        eleveDB.insert(Eleve, function(err, eleve) {
            if (err) res.status(500).send(err);
            else res.send(eleve);
        });
    } else {
        eleveDB.update({
            _id: parseInt(req.body.id)
        }, Eleve, {}, function(
            err,
            numReplaced,
            teacher
        ) {
            if (err) res.status(500).send(err);
            else res.sendStatus(200);
        });

    }



    // var neweleve = req.body;
    // eleveDB.insert(neweleve, function(err, eleve) {
    //     if (err) res.status(500).send(err);
    //     else res.sendStatus(200);
    // });
});



app.delete("/eleve/:eleveId", function(req, res) {
    eleveDB.remove({
        _id: req.params.eleveId
    }, function(err, numRemoved) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});




app.put("/eleve", function(req, res) {
    let eleveId = req.body._id;

    eleveDB.update({
        _id: eleveId
    }, req.body, {}, function(
        err,
        numReplaced,
        eleve
    ) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});