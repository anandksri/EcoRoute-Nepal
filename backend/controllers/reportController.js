const Report = require("../models/Report");

// Create Report
const createReport = async (req, res) => {
  try {
    const { title, description, location } = req.body;

    const report = await Report.create({
      title,
      description,
      location,
      userName,
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find();

    res.json(reports);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateReportStatus = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.json(report);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createReport,
  getReports,
  updateReportStatus,
};