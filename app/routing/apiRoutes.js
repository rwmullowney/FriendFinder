var friendsList = require("../data/friends");

module.exports = function(app){
   
    app.get("/api/friends", function(req, res){
        res.json(friendsList)
    })

    app.post("/api/friends", function(req, res){
        // Sends the user info to the user list in friends.js
        friendsList.push(req.body);
    });

};