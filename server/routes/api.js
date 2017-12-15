const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100000000,
        files: 10
    }
});

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://admin2:admin2@ds157521.mlab.com:57521/usgz', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/clanovi', (req, res) => {
    connection((db) => {
        db.collection('clanovi')
            .find()
            .toArray()
            .then((clanovi) => {
                response.data = clanovi;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Post clana
router.post('/clan', (req, res) => {
    var clan = req.body;
    if(!clan.name || !clan.surname || !clan.status) {
        res.status(400);
        res.json({
            "error": "Neispravni podaci - ime, prezime ili status"
        });
    } else {
        connection((db) => {
            db.collection('clanovi').save(clan, (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    response.data = result;
                    res.json(response);
                }
            });
        });
    }
});

// Put clana po ID-ju
router.put('/clanovi/:_id', (req, res) => {
    var query = req.params._id;
    
    var updClan = {
        name: req.body.name,
        surname: req.body.surname,
        status: req.body.status,
        isActive: req.body.isActive
    };

    if (!updClan) {
        res.status(400);
        res.json({
            "error": "Nepotpuni podaci"
        });
    }

    connection((db) => {
        db.collection('clanovi').update({
            _id: ObjectID(query)
        }, updClan, {}, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    });
});

// Delete clana
router.delete('/clanovi/:_id', (req, res) => {
    var query = req.params._id;
    connection((db) => {
        db.collection('clanovi').remove({
            _id: ObjectID(query)
        }, '', (err, result) => {
            if(err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    });
});

// Get svih clanaka
router.get('/sadrzaj', (req,res) => {
    connection((db) => {
        db.collection('sadrzaj')
            .find()
            .toArray()
            .then((sadrzaj) => {
                response.data = sadrzaj;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get clanka po imenu
router.get('/sadrzaj/:name', (req,res) => {
    var query = req.params.name;
    connection((db) => {
        db.collection('sadrzaj')
            .findOne({name:query}, (err, clanak) => {
                if (err || !clanak) {
                    res.render('error', {});
                } else {
                    response.data = clanak;
                    res.render('clanak', {clanak:clanak});
                }
            });
    });
});

// Put clanka po ID-ju
router.put('/sadrzaj/:_id', (req,res) => {
    var query = req.params._id;
    
    var updClanak = {
        name: req.body.name,
        text: req.body.text,
        img: req.body.img
    };

    if (!updClanak) {
        res.status(400);
        res.json({
            "error": "Nepotpuni podaci"
        });
    }

    connection((db) => {
        db.collection('sadrzaj').update({
            _id: ObjectID(query)
        }, updClanak, {}, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    });
});

//Post clanka
router.post('/addsadrzaj', (req, res) => {
    var noviClanak = req.body;
    connection((db) => {
        db.collection('sadrzaj').save(noviClanak, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                response.data = result;
                res.json(response);
            }
        });
    });
});

// Delete clanka
router.delete('/sadrzaj/:_id', (req, res) => {
    var query = req.params._id;
    console.log(query);
    connection((db) => {
        db.collection('sadrzaj').remove({
            _id: ObjectID(query)
        }, '', (err, result) => {
            if(err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    });
});

router.post('/upload', upload.array('uploads[]', 10), (req, res, next) => {
    try {
        res.send(req.files);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;