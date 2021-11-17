var express = require("express");
var router = express.Router();

const candidatesController = require("../controllers/candidatesController");

router.get("/", candidatesController.getCandidates);

module.exports = router;
