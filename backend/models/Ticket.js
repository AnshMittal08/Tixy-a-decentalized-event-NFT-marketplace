// backend/models/Ticket.js
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  ticketPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  nftTokenId: { type: String, required: true }, // To store the NFT token ID
});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;
