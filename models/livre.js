const mongoose = require('mongoose');

const LivreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Le titre est obligatoire'],
        minlength: [2, 'Le titre doit contenir au moins 2 caracteres']
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auteur',
        required: [true, 'id auteur est requis']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Livre', LivreSchema);