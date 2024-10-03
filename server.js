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

// Connect to PostgreSQL using Sequelize and start the server only after connection success
const startServer = async () => {
  try {
    await connectDB(); // Connect to the database

    // Sync Sequelize models with PostgreSQL (creates tables if not present)
    await sequelize.sync();
    console.log('Database synced successfully');

    // Routes
    app.use('/api', gameRoutes); // All API routes will be prefixed with '/api'

    // Define a port (use environment variable or fallback to 5000)
    const PORT = process.env.PORT || 5000;

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('Error starting the server:', err);
  }
};

// Start the server
startServer();
