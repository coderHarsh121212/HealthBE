const HealthRecord = require('../models/HealthRecordsModel');

// @desc Get all health records
// @route GET /api/health-records
exports.getHealthRecords = async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get single health record
// @route GET /api/health-records/:id
exports.getHealthRecordById = async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) return res.status(404).json({ message: 'Record not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Create new health record
// @route POST /api/health-records
exports.createHealthRecord = async (req, res) => {
  const { date, bodyTemperature, bloodPressure, heartRate } = req.body;

  try {
    const newRecord = new HealthRecord({
      date,
      bodyTemperature,
      bloodPressure,
      heartRate,
    });

    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Update health record
// @route PUT /api/health-records/:id
exports.updateHealthRecord = async (req, res) => {
  const { date, bodyTemperature, bloodPressure, heartRate } = req.body;

  try {
    const updatedRecord = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { date, bodyTemperature, bloodPressure, heartRate },
      { new: true }
    );
    if (!updatedRecord) return res.status(404).json({ message: 'Record not found' });
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Delete health record
// @route DELETE /api/health-records/:id
exports.deleteHealthRecord = async (req, res) => {
  try {
    const deletedRecord = await HealthRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) return res.status(404).json({ message: 'Record not found' });
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
