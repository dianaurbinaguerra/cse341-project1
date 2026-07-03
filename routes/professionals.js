const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professional");

router.get("/", professionalController.getAll);
router.get("/:id", professionalController.getSingle);

module.exports = router;