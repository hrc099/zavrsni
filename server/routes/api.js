const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var EasyZip = require('easy-zip').EasyZip;

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uplPath = req.path==='/uploadDoc'?'doc':'img';
        let path = `./uploads/${uplPath}`;
        fs.mkdirsSync(path);
        cb(null, path);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + '_' + Date.now() + path.extname(file.originalname));
    }
});

// Filter images
const imgFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
        return cb(new Error('Samo slike formata jpg, jpeg, png, gif, svg su dopuštene'), false);
    }
    cb(null, true);
};

// Filter files incl. images
const allFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg|doc|docx|xls|xlsx|ppt|pptx|pdf|txt)$/)) {
        return cb(new Error('Dopušteni su formati jpg|jpeg|png|gif|svg|doc|docx|xls|xlsx|ppt|pptx|pdf|txt'), false);
    }
    cb(null, true);
};

// Init upload for img
const uploadImg = multer({
    storage: storage,
    fileFilter: imgFilter
});

// Init multiple upload for docs
const uploadArr = multer({
    storage: storage,
    fileFilter: allFilter,
    limits: {
        fileSize: 100000000,
        files: 10
    }
});

// Connect to DB
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
        pic: req.body.pic,
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

router.get('/uploads/doc', (req, res) => {
    fs.readdir(path.join('uploads', 'doc'), (err, filenames) => {
        if(err) {
            res.send(err);
        } else {
            response.data = filenames;
            res.json(response);
        }
    });
});

router.get('/uploads/img', (req, res) => {
    fs.readdir(path.join('uploads', 'img'), (err, filenames) => {
        if(err) {
            res.send(err);
        } else {
            response.data = filenames;
            res.json(response);
        }
    });
});

router.post('/uploadDoc', uploadArr.array('uploads[]', 10), (req, res, next) => {
    try {
        res.send(req.files);
    } catch (err) {
        res.send(err);
    }
});

router.post('/uploadImg', uploadImg.single('uploadImg'), (req, res, next) => {
    try {
        response.data = req.file;
        res.json(response);
    } catch (err) {
        res.send(err);
    }
});

router.post('/uploadImgs', uploadImg.array('uploads[]', 10), (req, res, next) => {
    try {
        res.send(req.files);
    } catch (err) {
        res.send(err);
    }
});

router.post('/deleteDat', (req, res) => {
    let toDel = req.body.path;
    fs.unlink(toDel, err => {
        if(err) {
            res.send(err);
        } else {
            response.data = 'Uspješno obrisana datoteka ' + toDel.split('/').pop();
            res.json(response);
        }
    });
});

router.post('/downloadDat', (req, res) => {
    let pathList = req.body;
    let objArr = [];
    pathList.forEach(file => {
        //archive.append(fs.createReadStream(file), { name: file.split('/').pop() });
        objArr.push({ source: file, target: file.split('/').pop() });
    });
    let zip = new EasyZip();
    zip.batchAdd(objArr, () => {
        //zip.writeToResponse(res, 'dl.zip');
        zip.writeToFile('uploads/dl.zip');
        response.data = 'uploads/dl.zip';
        res.json(response);
    });
});

router.post('/deleteDats', (req, res) => {
    let pathList = req.body;
    pathList.forEach(path => {
        fs.unlink(path, err => {
            if(err) {
                response.data += 'Neuspješno brisanje datoteke ' + path.split('/').pop() + '\n';
            } else {
                response.data += 'Uspješno brisanje datoteke ' + path.split('/').pop() + '\n';
            }
        });
    });
    res.json(response);
});

module.exports = router;
