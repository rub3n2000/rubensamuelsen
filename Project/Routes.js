// importing modules
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const secrets = require("../secrets");
const isAdmin = require("../middleware").isAdmin;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// importing User Schema
const Project = require("./Model");
const Tag = require("../Tag/Model");

//Get Project by id Route
router.get("/:id", function (req, res) {
  Project.findById(req.params.id)
    .populate("tags")
    .exec(function (err, project) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(project);
      }
    });
});

router.delete("/:id", isAdmin, function (req, res) {
  Project.findByIdAndDelete(req.params.id).exec(function (err, project) {
    if (err) {
      res.send(err);
    } else {
      res.status(202).send(project);
    }
  });
});

//Get all projects route.
router.get("/", function (req, res) {
  Project.find({})
    .populate("tags")
    .exec(function (err, projects) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(projects);
      }
    });
});

//New Project Route
router.post("/", isAdmin, function (req, res) {
  var myTags = [];
  Project.findOne(
    {
      $or: [
        { name: req.body.project.name },
        { sourceURL: req.body.project.sourceURL },
        { websiteURL: req.body.project.websiteURL },
        { subHeader: req.body.project.subHeader },
        { description: req.body.project.description },
        { screenshotURL: req.body.project.screenshotURL },
      ],
    },
    function (err, project) {
      if (err) {
        console.log(err);
      }
      if (project == null) {
        Project.create(
          {
            name: req.body.project.name,
            websiteURL: req.body.project.websiteURL,
            sourceURL: req.body.project.sourceURL,
            subHeader: req.body.project.subHeader,
            description: req.body.project.description,
            screenshotURL: req.body.project.screenshotURL,
            tags: [],
          },
          function (err, newProject) {
            if (err) {
              console.log(err);
            } else {
              if (req.body.tags && Array.isArray(req.body.tags)) {
                Tag.find({ name: { $in: req.body.tags } }, async function (
                  err,
                  dbTags
                ) {
                  if (err) {
                    console.log(err);
                  }
                  for (let i = 0; i < req.body.tags.length; i++) {
                    const result = dbTags.find(
                      (u) => u.name == req.body.tags[i]
                    );
                    if (result != undefined && result != null) {
                      myTags.push(result);
                    }
                  }
                }).then(() => {
                  newProject.tags = myTags;
                  newProject.save((err, updatedNewProject) => {
                    if (err) {
                      console.log(err);
                    }
                  });
                });
              }
            }
            res.status(201).send(newProject);
          }
        );
      } else {
        res
          .status(400)
          .send(
            "Duplicate values " + project + " already has one of your values"
          );
      }
    }
  );
});

module.exports = router;
