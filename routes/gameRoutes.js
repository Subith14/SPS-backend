// routes/gameRoutes.js
const express = require('express');
const Game = require('../models/Game'); // Import the Game model

const router = express.Router();

// Route to save a game
router.post('/save-game', async (req, res) => {
  try {
    const { player1, player2, rounds, finalWinner } = req.body;

    // Create a new game entry in the database
    const newGame = await Game.create({
      player1,
      player2,
      rounds,
      final_winner: finalWinner, // Save the winner in snake_case to match the DB schema
    });

    res.status(201).json({ message: 'Game saved successfully', game: newGame });
  } catch (error) {
    console.error('Error saving game:', error);
    res.status(500).json({ message: 'Error saving game', error: error.message });
  }
});

// Route to get all games
router.get('/games', async (req, res) => {
  try {
    const games = await Game.findAll();
    res.status(200).json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Error fetching games', error: error.message });
  }
});

module.exports = router;
