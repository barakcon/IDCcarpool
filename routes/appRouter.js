var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});


var auth = require('./../myModules/authentication');
var users = require('./../myModules/users');
var rides = require('./../myModules/rides');
var calculator = require('./../myModules/calculator');// delete later
var comments = require('./../myModules/comment');

router.use(auth.middleAuth)

.post('/setCalc/:num', calculator.set) //remove after
.get('/getCalc', calculator.get) // remove after

.get('/logout', auth.logout)
.get('/profile/:id', users.getProfile)
.post('/createRide', parseUrlencoded, rides.createRide)
.get('/getRide/:id', rides.getRide)
.get('/futureRides', rides.getFutureData)
.post('/CreateNewComment', parseUrlencoded, comments.createComment)
.use('/', express.static(__dirname + "\\..\\" + 'www\\'));

module.exports = router;