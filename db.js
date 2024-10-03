// db.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env

// Initialize Sequelize with DATABASE_URL from environment variables
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // Disable logging for cleaner console output
});

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Test the database connection
    console.log('PostgreSQL connected successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
