const users = require('../controllers/users.controller');


module.exports = function (app) {
    app.route('/users')
        .get( users.viewUsers );
    app.route('/users/register')
        .post( users.register );
    app.route('/users/login')
        .post( users.logIn );
    app.route('/healthCheck')
        .get((req, res) => {
            console.log("I am Healthy")
            res.sendStatus(200)
        })
};