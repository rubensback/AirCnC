const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //esta determinando que o tipo do user vai ser o ID gerado automaticamente pelo mongo
        ref: "User" //referencia para qual model é essa informação
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spot" 
    }
})

module.exports = mongoose.model('Booking', BookingSchema);