const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/", gameController.getAllGames);

module.exports = router;