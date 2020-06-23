//#region  Imports
const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require("body-parser");
const User = require('./User/Model');
const session = require("express-session");
const LocalStrategy = require('passport-local').Strategy;  
const userRoutes = require('./User/Routes');
const projectRoutes = require('./Project/Routes');
const secrets = require('./secrets');

const app = express();
mongoose.connect("mongodb+srv://rub3n2000:"+secrets.mongoPassword+"@rubensamuelsen-rjp7z.mongodb.net/rubensamuelsen?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
//#endregion

//#region  App setup statements
//app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(require("express-session")({
    secret: secrets.authKey,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); 
app.use(passport.session()); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 
passport.use(new LocalStrategy(User.authenticate())); 
app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
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