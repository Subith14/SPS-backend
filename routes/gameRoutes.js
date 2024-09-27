const express = require('express');
const mongoose = require('mongoose');
const Game = require('../models/game'); // Assuming you have a Game model

const router = express.Router();

router.post('/save-game', async (req, res) => {
  console.log("recived data:",req.body);
  
  try {
    const gameData = new Game(req.body);
    await gameData.save();
    res.status(201).send({ message: 'Game saved successfully!' });
  } catch (error) {
    console.error('Error saving game:', error);
    res.status(500).send({ message: 'Error saving game' });
  }
});


router.get('/games', async (req, res) => {
  try {
    const games = await Game.find(); // Adjust this according to your model
    res.status(200).send(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).send({ message: 'Error fetching games' });
  }
});

module.exports = router;
