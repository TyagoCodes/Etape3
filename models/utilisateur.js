const mongoose = require('mongoose');

const UtilisateurSchema = new mongoose.Schema({

    text: {
        type: String,
        required: [true, 'Text is required for Utilisateur'],
        minLength: [1, 'Must have at least 1 character']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema)