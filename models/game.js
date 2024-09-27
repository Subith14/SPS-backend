const mongoose = require('mongoose');

// Define the schema for the game data
const gameSchema = new mongoose.Schema({
  player1: { type: String, required: true },
  player2: { type: String, required: true },
  rounds: [
    {
      roundNumber: Number,
      player1Choice: String,
      player2Choice: String,
      winner: String
    }
  ],
  finalWinner: { type: String, required: true }
}, { timestamps: true });

const Game = mongoose.model('game', gameSchema);
module.exports = Game;
