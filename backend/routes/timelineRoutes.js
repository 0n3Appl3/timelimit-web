const express = require("express");
const router = express.Router();
const timelineController = require("../controllers/timelineController");

router.get("/", timelineController.getLatestTimeline);
router.get("/:id", timelineController.getTimelineById);

module.exports = router;