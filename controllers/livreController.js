const Livre = require('../models/livre');

// GET
exports.getAll = async (req, res, next) => {
    try {
        const filter = req.query.search
            ? { title: new RegExp(req.query.search, 'i') }
            : {};
        const livres = await Livre.find(filter);
        res.json(livres);
    } catch (err) {
        next(err);
    }
};

// GET
exports.getById = async (req, res, next) => {
    try {
        const livre = await Livre.findById(req.params.id);
        if (!livre) return res.sendStatus(404);
        res.json(livre);
    } catch (err) {
        next(err);
    }
};

// GET
exports.getByAuteur = async (req, res, next) => {
    try {
        const livres = await Livre.find({ authorId: req.params.auteurId });
        res.json(livres);
    } catch (err) {
        next(err);
    }
};

// POST
exports.create = async (req, res, next) => {
    try {
        const { title, authorId } = req.body;
        if (!title || title.length < 2) {
            return res
                .status(400)
                .json({ message: 'Au moins 2 char pour le titre!!' });
        }
        if (!authorId) {
            return res.status(400).json({ message: 'authorId required' });
        }
        const newLivre = await Livre.create({ title, authorId });
        res.status(201).json(newLivre);
    } catch (err) {
        next(err);
    }
};

// PUT
exports.update = async (req, res, next) => {
    try {
        const { title, authorId } = req.body;
        const updated = await Livre.findByIdAndUpdate(
            req.params.id,
            { title, authorId },
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
        const result = await Livre.findByIdAndDelete(req.params.id);
        if (!result) return res.sendStatus(404);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
