var express = require('express');
var router = express.Router();
var AdmitCard = require('../models/admitcard');
var middlewere = require('../middlewere');


router.get('/AdmitCard', function(req, res) {
    AdmitCard.find({ category: 'AdmitCard' }, function(err, admitcards) {
        if (err || !admitcards) {
            req.flash('error', 'Blogs Not Found' + 404 + 'Error.');
            res.redirect('back');
        } else {
            res.render('admitcard', {
                admitcards: admitcards,
                header: 'Admit Card'
            });
        }
    });
});
router.get('/Results', function(req, res) {
    AdmitCard.find({ category: 'Result' }, function(err, results) {
        if (err || !results) {
            req.flash('error', 'Blogs Not Found' + 404 + 'Error.');
            res.redirect('back');
        } else {
            res.render('admitcard', {
                admitcards: results,
                header: 'Result'
            });
        }
    });
});

router.get('/AdmitCard/new', middlewere.isLoggedIn, function(req, res) {
    res.render('newadmit');
});

router.post("/AdmitCard", middlewere.isLoggedIn, function(req, res) {
    AdmitCard.create(req.body.admitcard, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("back");
        }
    });
});
module.exports = router;