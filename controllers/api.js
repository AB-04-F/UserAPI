var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var user = models.tbl_item;

//readAll method call
router.get('/readAll', function(req, res) {


    user.findAll({


    }).then(function(results) {
        if (results) {
            res.json(results);
        } else {
            res.json([]);
        }
    }).catch(function(err) {
        console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
        res.json({
            success: false,
            message: 'Record(s) not found.'
        });
    });
});
//read method call
router.get('/read/:id', function(req, res) {
    console.log(req.params)
    user.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(results) {
        if (results) {
            res.json(results);
        } else {
            res.json(null);
        }
    }).catch(function(err) {
        console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
        res.json({
            success: false,
            message: 'Record(s) not found.'
        });
    });
});


//insert method call
router.post('/create', function(req, res) {
    console.log(req.body)

    user.create(req.body).then(function(results) {
        if (results) {
            res.json({ success: true, message: "order Inserted" });
        } else {
            res.json({ success: false, message: "order not Inserted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "order not Inserted" });
    });


});
//update method call
router.put('/update/:id', function(req, res) {
        console.log(req.body)
        user.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            if (results) {
                res.json({ success: true, message: "product Updated" });
            } else {
                res.json({ success: false, message: "product not Updated" });
            }
        }).catch(function(err) {
            console.log(err)
            res.json({ success: false, message: "product not Updated" });
        });
    })
    //detete method call
router.delete('/delete/:id', jsonParser, function(req, res) {
    console.log(req.params)
    user.destroy(({
        where: {
            id: req.params.id
        }

    })).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product Deleted" });
        } else {
            res.json({ success: false, message: "product not Deleted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product not Deleted" });
    });
})

module.exports = router;