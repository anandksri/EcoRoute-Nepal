const express = require("express");

const router = express.Router();

const {
  createCollection,
} = require("../controllers/collectionController");

router.post("/", createCollection);

module.exports = router;