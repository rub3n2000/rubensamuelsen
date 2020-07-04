var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TagSchema = new Schema({
  name: { type: String, unique: true, required: true },
  logoURL: { type: String, unique: false, required: false },
});

// export tagSchema
module.exports = mongoose.model("Tag", TagSchema);
