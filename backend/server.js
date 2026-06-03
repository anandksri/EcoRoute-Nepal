const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const reportRoutes = require("./routes/reportRoutes");
const collectionRoutes = require( "./routes/collectionRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));



app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use( "/api/collections",collectionRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("EcoTrack API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});