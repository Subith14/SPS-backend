// models/game.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

// Define the Game model
const Game = sequelize.define('Game', {
  player1: {
    type: DataTypes.STRING,
    allowNull: false, // Ensure player1 is required
  },
  player2: {
    type: DataTypes.STRING,
    allowNull: false, // Ensure player2 is required
  },
  rounds: {
    type: DataTypes.JSONB, // Store game rounds as JSONB
    allowNull: false, // Ensure rounds are required
  },
  final_winner: { // Match PostgreSQL snake_case naming convention
    type: DataTypes.STRING,
    allowNull: false, // Ensure final_winner is required
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt
  createdAt: 'created_at', // Customize createdAt field name
  updatedAt: 'updated_at', // Customize updatedAt field name
});

module.exports = Game;
