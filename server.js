// server.js
const express = require('express');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes'); // Import game routes
const { connectDB, sequelize } = require('./db');  // Import database connection and sequelize instance
require('dotenv').config(); // Load environment variables

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Connect to PostgreSQL using Sequelize
connectDB();

// Sync Sequelize models with PostgreSQL (creates tables if not present)
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

// Routes
app.use('/api', gameRoutes); // All API routes will be prefixed with '/api'

// Define a port (use environment variable or fallback to 5000)
const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
