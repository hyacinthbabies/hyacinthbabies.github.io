var User = require("./user.js");

/**
 * 插入
 */
module.exports = {
    insert: function() {
        var user = new User({
            username: 'shq', //用户账号
            userpwd: '123qwe', //密码
            userage: '24', //年龄
            logindate: '2016-10-19'
        });
        user.save(function(err, res) {

            if (err) {
                console.log("Error:" + err);
            } else {
                console.log("Res:" + res);
            }
            // res.next();
        });
    }
}
