const user = require('../models/users.model');

exports.viewUsers =async function (req, res) {
    console.log( '\nRequest to get all users from the database');
    try {
        const result = await user.getAllUsers()
        res.status(200)
            .send(result)
    } catch (err) {
        res.status(500)
            .send(`Error fetching Users ${err}`);
    }

}