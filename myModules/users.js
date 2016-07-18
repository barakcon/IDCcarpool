var users = [
	{
		id :"Sapir",
		password: "1111",
		type: "default",
		bDay: new Date(1993, 10, 13),
		major: "CS",
		freshmanYear: 2014,
		graduationYear: 2017,
		car: null,
		calc: "0" //remove later
	},
	{
		id: "Barak",
		password: "123456",
		type: "admin",
		bDay: new Date(1992, 10, 13),
		major: "CS",
		freshmanYear: 2015,
		graduationYear: 2018,
		car: "Mazda 2",
		calc: "2", //remove later
	}
];
function findProfileData(id){
	var raw = users.find(id);
	if(raw == null){
		return null;
	}
	return {
		id: id,
		bDay: raw.bDay,
		major: raw.major,
		freshmanYear: raw.freshmanYear,
		graduationYear: raw.graduationYear,
		car: raw.car,
	}
}

function find(id){
	for (var i = 0; i < users.length; i++) {
		if( users[i].id == id ){
			return users[i];
		}
	}
	return null;
}

module.exports = {
	login : function(id, pass){
		var user = find(id);
		if(user){
			return user.password == pass;
		}
		return false;
	},
	getProfile: function(req, res){
		var id = req.params.id;
		var profile = findProfileData(id);
		if(profile){
			res.json(profile);			
		} else {
			res.json(false);
		}
	},
	createUser: function(userObj){
		user.push(userObj);
	},
	getCalc : function(id){
		var user = find(id);
		if(user){
			return user.calc;
		}
		throw new Error('user does not exist');
	},
	setCalc : function(id, data){
		var user = find(id);
		if(user){
			user.calc = data;
		} else {
			throw new Error('user does not exist');
		}
	} 
}