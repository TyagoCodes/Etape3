const mongoose = require('mongoose');

const AuteurSchema = new mongoose.Schema({

    text: {
        type: String,
        required: [true, 'Text is required for Author'],
        minLength: [1, 'Must have at least 1 character']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Auteur', AuteurSchema)