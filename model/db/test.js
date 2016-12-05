var User = require("../user.js");
var Article = require("../article.js");

/**
 * 插入
 */
module.exports = {
    insert: function(req) {
        var article = new Article(req.body);
        article.save(function(err, res) {

            if (err) {
                console.log("Error:" + err);
            } else {
                console.log("Res:" + res);
            }
            // res.next();
        });
    },
    list: function(req, res) {
        User.find(function(err,user) {
            if (err) {
                console.log("Error:" + err);
            } else {
                console.log("Res:" + user);
                res.json(user);
            }
        })
    }
}
