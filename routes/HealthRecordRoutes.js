const express = require("express");
const {
  getHealthRecords,
  getHealthRecordById,
  createHealthRecord,
  updateHealthRecord,
  deleteHealthRecord,
} = require("../controllers/HealthRecordController");

const router = express.Router();

// Routes
router.get("/", getHealthRecords);
router.get("/:id", getHealthRecordById);
router.post("/", createHealthRecord);
router.put("/:id", updateHealthRecord);
router.delete("/:id", deleteHealthRecord);

module.exports = router;
