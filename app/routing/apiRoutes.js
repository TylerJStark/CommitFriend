//Accessing the friends.js file
var friendsData = require("../data/friends");

module.exports = function(app) {

	//Retreiving the friends data
	app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

	//Adding to the friends data
	app.post("/api/friends", function(req, res) {
    res.json(friendsData);
    	//Take in new results
	    //Handle compatibility logic

  });
};