const user = require('../models/users.model');

function generateToken() {
    let x = Math.random().toString(36).substr(2);
    let y = Math.random().toString(36).substr(2);
    return x + y;
}

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


exports.logIn = async function (req, res) {

    const credentials = [req.body.email, req.body.password];
    console.log(`Attempted logIn by ${credentials[0]}`)
    try {
        const correctCredentials = await user.checkCredentials(credentials);
        if (!correctCredentials) {
            res.status(400)
                .send("Invalid Credentials")
        } else {
            const token = generateToken();
            await user.logIn(credentials, token);
            const id = await user.findUserIdByToken( token );
            res.status(200)
                .json({"userId": id[0].user_id, "token": token});
        }
    } catch (err) {
        res.status(500)
            .send("INTERNAL SERVER ERROR");
    }


};