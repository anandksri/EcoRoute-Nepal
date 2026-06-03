const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");


const { 
    signup,
    login,
 } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", protect, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user,
  });
});

module.exports = router;