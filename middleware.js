const User = require('./User/Model');

module.exports = {
    isLoggedIn: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        } else {
            res.redirect('/');
        }
    },
    isAdmin: function(req, res, next){
        if(req.user && req.isAuthenticated()) {
        User.findById(req.user._id, function(err, user){
            if(err) {
                res.status(500).send(err);
              console.log("wadhy");
            }
            else {
                if(user.isAdmin) {
                    return next()
                }
                console.log("why");
                res.status(401).send(null);
            }
        });
        }
        else {
            console.log("how");
            res.status(401).send(null);
        }
    }
}