const express = require("express");
const router = express.Router();
const resultController = require("../controllers/resultController");

router.get("/", resultController.getLatestResult);
router.get("/:id", resultController.getResultById);
router.post("/", resultController.createResult);

module.exports = router;