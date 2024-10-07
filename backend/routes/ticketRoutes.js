// backend/routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// POST route to create a new ticket
router.post('/', async (req, res) => {
  const { eventName, eventDate, ticketPrice, imageUrl, nftTokenId } = req.body;
  try {
    const ticket = new Ticket({ eventName, eventDate, ticketPrice, imageUrl, nftTokenId });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET route to fetch all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
