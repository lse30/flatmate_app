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

exports.register = async function (req, res) {
    console.log('\nRequest to register a new user...');
    const newUser = req.body;
    try {
        const firstName = newUser.firstName;
        const surname = newUser.surname;
        // const password = passwordHash.generate(newUser.password);
        const password = newUser.password;
        const email = newUser.email;
        let values = [firstName, surname, email, password];
        // (newUser.city != null) ? values.push(newUser.city) : values.push(null);
        // (newUser.country != null) ? values.push(newUser.country) : values.push(null);

        if (email.includes('@')) {
            const emailInUse = await user.checkEmail(email);
            if (emailInUse.length > 0) {
                res.status(400)
                    .send("Email in use");
            } else {
                const result = await user.insert(values);
                res.status(201)
                    .json({"userId": result.insertId});

            }
        } else {
            res.status(400)
                .send('Bad Email');
        }
    } catch (err) {
        res.status(400)
            .send('ERROR creating user')
    }
};