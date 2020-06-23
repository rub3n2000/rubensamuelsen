// importing modules  
const express = require('express');  
const router = express.Router();  
const passport = require("passport");
const jwt = require('jsonwebtoken');
const secrets = require('../secrets');
const isLoggedIn = require('../middleware').isLoggedIn;

// importing User Schema  
const User = require('./Model');

router.post('/register', function(req, res) { 
    Users=new User({username : req.body.username, isAdmin: false}); 

        User.register(Users, req.body.password, function(err, user) { 
        if (err) { 
            res.json({success:false, 
            message: "Your account could not be saved. " + err});
        }else{ 
            res.json({success: true, message: "Your account has been saved"}); 
        } 
    }); 
});

router.post('/login', function(req, res) { 
    if(!req.body.username){ 
      res.json({success: false, message: "Username was not given"}) 
    } else { 
      if(!req.body.password){ 
        res.json({success: false, message: "Password was not given"}) 
      }else{ 
        passport.authenticate('local', function (err, user, info) {  
           if(err){ 
             res.json({success: false, message: err}) 
             console.log(err);
           } else{ 
            if (!user) { 
              res.json({success: false, message: 'username or password incorrect'}) 
            } else{ 
              req.login(user, function(err){ 
                if(err){ 
                  console.log(err);
                  res.json({success: false, message: err}) 
                }else{ 
                  const token = jwt.sign({userId : user._id,  
                     username:user.username}, secrets.authKey,  
                        {expiresIn: '24h'}) 
                  res.json({success:true, message:"Authentication successfull", token: token }); 
                } 
              }) 
            } 
           } 
        })(req, res); 
      } 
    } 
}); 

router.get('/me', isLoggedIn, function(req,res) {
  User.findById(req.user._id, function(err, user){
    if(err) {
      res.send(err);
    }
    else {
      res.send(user);
    }
  });
});

router.get("/AmIAdmin", isLoggedIn, function(req,res) {
  User.findById(req.user._id, function(err, user){
    if(err) {
      res.send(err);
    }
    else {
      res.send({result: user.isAdmin});
    }
  });
})

module.exports = router; 