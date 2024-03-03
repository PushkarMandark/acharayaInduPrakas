const express = require("express");
const cors = require("cors");
const ConnectDb = require("./setup/dbConnection.js");
require("dotenv").config();

// Import routes
const userRoutes = require("./routes/user.js");
const blogRoutes = require("./routes/blog.js");

// Initialize Express app
const app = express();

// Connect to the database
ConnectDb();

// Middleware
app.use(express.json()); // Automatically parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.use("/user", userRoutes); // User routes
app.use("/blog", blogRoutes); // Blog routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Define the port
const port = process.env.PORT || 7000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
