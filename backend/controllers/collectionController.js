const Collection = require("../models/Collection");
const User = require("../models/User");

const createCollection = async (req, res) => {
  try {
    const {
      userName,
      driverName,
      garbageType,
      weightKg,
    } = req.body;

    const user = await User.findOne({
      username: userName,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    let rate = 0;

    switch (garbageType) {
      case "Plastic":
        rate = 5;
        break;

      case "Paper":
        rate = 4;
        break;

      case "Metal":
        rate = 8;
        break;

      case "Organic":
        rate = 2;
        break;

      default:
        rate = 1;
    }

    const rewardAmount = weightKg * rate;

    const collection = await Collection.create({
      userName,
      driverName,
      garbageType,
      weightKg,
      rewardAmount,
    });

    user.walletBalance += rewardAmount;

    await user.save();

    res.status(201).json({
      message: "Collection Saved",
      collection,
      newBalance: user.walletBalance,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCollection,
};