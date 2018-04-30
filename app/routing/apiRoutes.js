var friendsList = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsList)
        // console.log("minimum difference: ")
        // console.log(minDiff)
    })

    app.post("/api/friends", function (req, res) {
        // So it looks like I should do my logic here and then whatever answer I give back is what I can show to the user.
        // i.e. I'll send the user data here, run my comparisons, and then whoever is closest I'll send back to be used in survey.html?

        // Declares variable to sum the difference
        var difference;
        // Declares variable to determine the user with minimal difference, with a high value to ensure the difference can be measured against it
        var minDiff = 100;
        // Declares variable for profile of best match
        var bestMatch;

        // For loop runs through the users in the friendsList
        for (var i = 0; i < friendsList.length; i++) {

            // Resets the variable for each user in the friendsList
            difference = 0;

            // Then runs through the answers from the req being sent vs. the users in friendsList already
            for (var j = 0; j < req.body.responses.length; j++) {
                difference += Math.abs(req.body.responses[j] - friendsList[i].responses[j])
            }
            
            // If the difference of the currently compared user is less than the lowest difference found,
            // you update the best match to be that person
            if (difference < minDiff) {
                bestMatch = friendsList[i];
                minDiff = difference;
            }

        }


        // Probably do this last so you only compare differences with people already in the 'users' array
        // Sends the user info to the user list in friends.js
        friendsList.push(req.body);
        
        // Console log the best match for the user
        console.log(bestMatch);
    });

};