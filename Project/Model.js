var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var ProjectSchema = new Schema({    
    name : {type: String, unique: true, required:true},
    websiteURL : {type: String, unique: true, required:true},
    sourceURL : {type: String, unique: true, required:true},
    subHeader : {type: String, unique: true, required:true},
    description : {type: String, unique: true, required:true},
    screenshotURL : {type: String, unique: true, required:true},
    tags: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tag"
            },
            name: String
        }
    ]
}); 

// export projectSchema 
 module.exports = mongoose.model("Project", ProjectSchema);