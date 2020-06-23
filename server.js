//#region  Imports
const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./User/Model');
const LocalStrategy = require('passport-local').Strategy;  
const userRoutes = require('./User/Routes');

const app = express();
//#endregion

//#region  App setup statements
app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(passport.initialize()); 
app.use(passport.session()); 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 
passport.use(new LocalStrategy(User.authenticate())); 
app.use('/api/user', userRoutes);
//#endregion

//#region Client Rendering Route
app.get("*", (req, res) => {
    res.sendFile('./index.html', {root: path.join(__dirname, '/client/build')});
});
//#endregion

//#region Server Starting
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
//#endregion