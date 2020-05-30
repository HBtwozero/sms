const app = require("express")();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const Datastore = require("nedb");
const async = require("async");


const fileUpload = require('express-fileupload');
const multer = require("multer");
const fs = require('fs');


const storage = multer.diskStorage({
    destination: process.env.APPDATA + '/sms/uploads/teachers',
    filename: function(req, file, callback) {
        callback(null, Date.now() + '.jpg'); // 
    }
});


let upload = multer({ storage: storage });



app.use(bodyParser.json());

module.exports = app;



let teacherDB = new Datastore({
    filename: process.env.APPDATA + "/sms/server/databases/teachers.db",
    autoload: true
})

teacherDB.ensureIndex({ fieldName: '_id', unique: true });

app.get("/", function(req, res) {
    res.send("Teacher API");
});


app.get("/teacher/:teacherId", function(req, res) {
    if (!req.params.teacherId) {
        res.status(500).send("ID field is required.");
    } else {
        teacherDB.findOne({
            _id: req.params.teacherId
        }, function(err, teacher) {
            res.send(teacher);
        });
    }
});


app.get("/teachers", function(req, res) {
    teacherDB.find({}, function(err, docs) {
        res.send(docs);
    });
});


app.post("/teacher", upload.single('imagename'), function(req, res) {

    let image = '';

    if (req.body.img != "") {
        image = req.body.img;
    }

    if (req.file) {
        image = req.file.filename;
    }

    if (req.body.remove == 1) {
        const path = './resources/app/public/uploads/teachers/teacher_image/' + req.body.img;
        try {
            fs.unlinkSync(path)
        } catch (err) {
            console.error(err)
        }

        if (!req.file) {
            image = '';
        }
    }

    let Teacher = {
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
        Teacher._id = Math.floor(Date.now() / 1000);
        teacherDB.insert(Teacher, function(err, teacher) {
            if (err) res.status(500).send(err);
            else res.send(teacher);
        });
    } else {
        teacherDB.update({
            _id: parseInt(req.body.id)
        }, Teacher, {}, function(
            err,
            numReplaced,
            teacher
        ) {
            if (err) res.status(500).send(err);
            else res.sendStatus(200);
        });

    }
});



app.delete("/teacher/:teacherId", function(req, res) {
    teacherDB.remove({
        _id: req.params.teacherId
    }, function(err, numRemoved) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});




app.put("/teacher", function(req, res) {
    let teacherId = req.body._id;

    teacherDB.update({
        _id: teacherId
    }, req.body, {}, function(
        err,
        numReplaced,
        teacher
    ) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});