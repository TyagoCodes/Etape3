module.exports = (err, req, res, next) => {
    console.error('Error caught:', err.message);
    res
        .status(err.status || 500)
        .json({ message: err.message || 'Server Error' });
};