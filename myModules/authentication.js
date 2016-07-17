var users = require('./users')

var auth = {
	login: function(req, res){
		if (!req.body) return res.sendStatus(400);
		if(users.login(req.body.username, req.body.password)){
			req.session.currentUser = req.body.username;
			res.json("true");
		} else {
			res.status(401).json("false");
		}
	},
	register: function(req, res){
		// TODO validate data!! (eg cannot have 2 user with the same id)
		// TODO create new user object
		// TODO push new objet to the array in users module
		// TODO return a relevant response
	},
	middleAuth: function(req, res, next){
		if(req.session.currentUser){
			next();
		} else {
			res.redirect('/public/accessDenied.html');
		}
	},
	getCurrentUser: function(req, res){
		res.json(req.session.currentUser);
	},
	logout: function(req, res){
		req.session.currentUser = null;
		res.json("true");
	}
}

module.exports = auth;