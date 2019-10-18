const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], //vetor com Strings
    user: {
        type: mongoose.Schema.Types.ObjectId, //esta determinando que o tipo do user vai ser o ID gerado automaticamente pelo mongo
        ref: "User" //referencia para qual model é essa informação
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);