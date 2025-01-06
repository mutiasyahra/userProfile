const auth = (req, res, next) => {
    const userRole = req.headers['user-role'];

    if (req.method === 'DELETE') {
        if (userRole && userRole === 'admin') {
            return next();
        }
    return res.status(403).json({ message: 'Forbidden: You are not authorized to delete data.' });
    }

    next();
};

module.exports = auth;