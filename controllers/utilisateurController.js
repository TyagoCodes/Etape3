const Utilisateur = require('../models/utilisateur');

// GET
exports.getAll = async (req, res, next) => {
    try {
        const filter = req.query.search
            ? { text: new RegExp(req.query.search, 'i') }
            : {};
        const utilisateurs = await Utilisateur.find(filter);
        res.json(utilisateurs);
    } catch (err) {
        next(err);
    }
};

// GET
exports.getById = async (req, res, next) => {
    try {
        const utilisateur = await Utilisateur.findById(req.params.id);
        if (!utilisateur) return res.sendStatus(404);
        res.json(utilisateur);
    } catch (err) {
        next(err);
    }
};

// POST
exports.create = async (req, res, next) => {
    try {
        const { text } = req.body;
        if (!text || text.length < 1) {
            return res
                .status(400)
                .json({ message: 'Au moins 1 char pour texte!' });
        }
        const newUtilisateur = await Utilisateur.create({ text });
        res.status(201).json(newUtilisateur);
    } catch (err) {
        next(err);
    }
};

// PUT
exports.update = async (req, res, next) => {
    try {
        const { text } = req.body;
        const updated = await Utilisateur.findByIdAndUpdate(
            req.params.id,
            { text },
            { new: true, runValidators: true }
        );
        if (!updated) return res.sendStatus(404);
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

// DELETE
exports.remove = async (req, res, next) => {
    try {
        const result = await Utilisateur.findByIdAndDelete(req.params.id);
        if (!result) return res.sendStatus(404);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
