//#region  Imports
const express = require("express");
const path = require("path");
const enforce = require("express-sslify");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const User = require("./User/Model");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const userRoutes = require("./User/Routes");
const projectRoutes = require("./Project/Routes");
const tagRoutes = require("./Tag/Routes");

const app = express();
//#endregion

//#region  App setup statements
if (process.env.DB_CONN_STRING) {
	mongoose.connect(process.env.DB_CONN_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
} else {
	mongoose.connect("mongodb://localhost:27017/rubensamuelsen", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
}

if (process.env.DB_CONN_STRING) {
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(express.static(path.join(__dirname, "/client/build")));
app.use(
	require("express-session")({
		secret:
			process.env.AUTHSECRET ||
			"daiuda%!#!#AD-_!¤1eadaeawi951402ADAD5t134_DAdddad532AADsadgHT352_SDA",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));
app.use("/api/user", userRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/tag", tagRoutes);
//#endregion

//#region Client Rendering Route
app.get("*", (req, res) => {
	res.sendFile("./index.html", {
		root: path.join(__dirname, "/client/build"),
	});
});
//#endregion

//#region Server Starting
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
//#endregion
