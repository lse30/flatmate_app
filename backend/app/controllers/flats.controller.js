const flats = require('../models/flats.model')
const user = require('../models/users.model')


exports.createFlat = async function (req, res) {
    console.log("\nCreating a new flat...");
    const token = req.header('X-Authorization');
    const newFlat = req.body;
    try {
        let userID = await user.findUserIdByToken(token)
        userID = userID[0].user_id;
        let values = [newFlat.flatName, newFlat.password, userID];
        const result = await flats.addFlat(values);
        res.status(201)
            .json({"flatId": result.insertId})
    } catch {
        res.sendStatus(500)
            .send("INTERNAL SERVER ERROR")
    }

};