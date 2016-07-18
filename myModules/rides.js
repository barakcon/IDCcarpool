var users = require('./users');
var comment = require('./comment');

var CONST = {
	today: new Date(),
	tomorrow: (new Date()).setDate((new Date()).getDate() + 1),
	later: (new Date()).setDate((new Date()).getDate() + 2),
}

var ridesData = [ // TODO: open from file
	{
		id: 0,
		author: "Sapir", // user ID
		type: "toIDC",
		role: "driver", // driver or passenger
		date: CONST.today,
		hour: ["12","30"],
		from: "Raanana",
		to: "IDC",
		notes: "best music",
		timeStamp: new Date(), //When this was created
		comments: [],
	},
	{
		id: 1,
		author: "Sivan", // user ID
		type: "toIDC",
		role: "passenger", // driver or passenger
		date: CONST.tomorrow,
		hour: ["08","15"],
		from: "Tel Aviv",
		to: "IDC",
		notes: "best music",
		timeStamp: new Date(), //When this was created
		comments: [],
	},
	{
		id: 2,
		author: "Barak", // user ID
		type: "toIDC",
		role: "passenger", // driver or passenger
		date: CONST.later,
		hour: ["09","00"],
		from: "Tel Aviv",
		to: "IDC",
		notes: "best music",
		timeStamp: new Date(), //When this was created
		comments: [],
	},
	{
		id: 3,
		author: "Sivan", // user ID
		type: "fromIDC",
		role: "driver", // driver or passenger
		date: CONST.today,
		hour: ["08","30"],
		from: "Ramat Gam",
		to: "IDC west gate",
		notes: "cool",
		timeStamp: new Date(), //When this was created
		comments: [],
	},
]

var counter = ridesData.length; //represents ids of rides

function validateRideInput(data){
	if(true)// TODO check if the given information validates
		// example: check of date is not in the past
		return true;
	return false;
}

function create(obj){
	// use counter and than do counter++
	// than push new user to the rides array
	// TODO
}

var rides = {
	createRide: function(req, res){
		if (!req.body) return res.sendStatus(400);
		var data = req.body;
		var valid = validateRideInput(data);

		if(valid){
			create(u);
			res.json("true");
		} else {
			res.json("false");
		}
	},
	getRide: function(req, res){
		var ride = rides[req.params.id];
		if(ride){
			res.json(ride);	
		}
		 res.status(402).json("ride wasn't found");
		 //TODO check the statuscode
	},
	// this function is used when the page loads
	getFutureData: function(req, res){
		res.json(ridesData);
		// TODO: do not return comments data
	},
	addComment: function(comment, rideID){
		rides[rideID].comments.push(comment);
	}
}

module.exports = rides;