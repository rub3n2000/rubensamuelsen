module.exports = {
    isLoggedIn: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        } else {
            res.status(401).send(null);
        }
    }
}