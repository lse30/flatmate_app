const user = require('../models/users.model');


exports.loginRequired = async function ( req, res, next) {
    const token = req.header('X-Authorization');

    try {
        const result = await user.findUserIdByToken(token);
        if (result.length === 0) {
            res.statusMessage = 'Unauthorized';
            res.status(401)
                .send();
        } else {
            next();
        }
    }   catch (err) {
        res.status(500)
            .send("INTERNAL SERVER ERROR");
    }
};

