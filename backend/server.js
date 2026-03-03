// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ FIXED Mongo URI
const MONGO_URI = "mongodb+srv://akhilakr0412_db_user:G8OspqviJDZt62uL@cluster0.cwijgvd.mongodb.net/?appName=Cluster0";

// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch(err => console.log(err));

// Routes
app.use("/api/patient", patientRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Server is running',
    timestamp: new Date()
  });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
