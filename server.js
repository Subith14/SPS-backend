const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Connect to MongoDB
mongoose.connect(process.env.DATABASE)
  .then(() => {
    console.log('MongoDB connected Successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use('/api', gameRoutes);

// Define a port
const PORT = process.env.PORT || 5000;

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
