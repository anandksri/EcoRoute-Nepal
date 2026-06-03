const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    driverName: {
      type: String,
      required: true,
    },

    garbageType: {
      type: String,
      required: true,
    },

    weightKg: {
      type: Number,
      required: true,
    },

    rewardAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Collection",
  collectionSchema
);