// importing modules
const express = require("express");
const router = express.Router();
const isAdmin = require("../middleware").isAdmin;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// importing User Schema
const Tag = require("../Tag/Model");

//Get Project by id Route
router.get("/:id", function (req, res) {
  Tag.findById(req.params.id).exec(function (err, tag) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(tag);
    }
  });
});

//Get all projects route.
router.get("/", function (req, res) {
  Tag.find({}).exec(function (err, tags) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(tags);
    }
  });
});

router.delete("/:id", isAdmin, function (req, res) {
  Tag.findByIdAndDelete(req.params.id).exec(function (err, tag) {
    if (err) {
      res.send(err);
    } else {
      res.status(202).send(tag);
    }
  });
});

router.post("/", isAdmin, function (req, res) {
  Tag.findOne({ name: req.body.name }, function (err, tag) {
    if (err) {
      res.status(500).send(err);
    }
    if (tag == null || tag == undefined) {
      Tag.create({ name: req.body.name }, function (err, newTag) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send(newTag);
        }
      });
    } else {
      res.status(400).send("This is a duplicate tag entry");
    }
  });
});

module.exports = router;
