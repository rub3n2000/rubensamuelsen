// importing modules  
const express = require('express');  
const router = express.Router();  
    
// importing User Schema  
const User = require('./Model');

router.post('register', function(req, res) { 
      
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

router.post('login', function(req, res) { 
    if(!req.body.username){ 
      res.json({success: false, message: "Username was not given"}) 
    } else { 
      if(!req.body.password){ 
        res.json({success: false, message: "Password was not given"}) 
      }else{ 
        passport.authenticate('local', function (err, user, info) {  
           if(err){ 
             res.json({success: false, message: err}) 
           } else{ 
            if (!user) { 
              res.json({success: false, message: 'username or password incorrect'}) 
            } else{ 
              req.login(user, function(err){ 
                if(err){ 
                  res.json({success: false, message: err}) 
                }else{ 
                  const token =  jwt.sign({userId : user._id,  
                     username:user.username}, secretkey,  
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

module.exports = router;