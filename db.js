// Import required modules
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env

// Initialize Sequelize with credentials
const sequelize = new Sequelize(process.env.DATABASE_URL || 'spsdb', 'postgres', 'Subith123', {
  host: process.env.DB_HOST || 'database-1.c7a682s8k7u3.ap-southeast-2.rds.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  logging: false, // Disable logging
  dialectOptions: {
    ssl: {
      require: true, // Enforce SSL
      rejectUnauthorized: false, // This will bypass certificate validation
    },
  },
});


// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Test the database connection
    console.log('PostgreSQL connected successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
     // Exit the process if unable to connect
  }
};

// Export the sequelize instance and connectDB function
module.exports = { sequelize, connectDB };

