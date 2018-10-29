//Accessing the friends.js file
var friendsData = require("../data/friends");
var arrayComp = [];

module.exports = function(app) {

	//Retreiving the friends data
	app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

	//Adding to the friends data
	app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      var matchFriends = {};

      for(var i = 0; i < newFriend.scores.length; i++) {
        if(newFriend.scores[i] == "1 (Strongly Disagree)") {
          newFriend.scores[i] = 1;
        } else if(newFriend.scores[i] == "5 (Strongly Agree)") {
          newFriend.scores[i] = 5;
        } else {
          newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
      }

      var matchFriendIndex = 0;
      var matchFriendDifference = 40;

      for(var i = 0; i < friendsData.length; i++) {
        var totalDifference = 0;

        for(var index = 0; index < friendsData[i].scores.length; index++) {
          var differenceOneScore = Math.abs(friendsData[i].scores[index] - newFriend.scores[index]);
          totalDifference += differenceOneScore;
        }

        if (totalDifference < matchFriendDifference) {
          matchFriendIndex = i;
          friendMatchDifference = totalDifference;
        }
      }
  });
};

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

//console.log(friendsData[i].scores); List of friends score
//console.log(req.body.scores); New score