const users = require('../controllers/users.controller');


module.exports = function (app) {
    app.route('/users')
        .get( users.viewUsers );
    app.route('/users/register')
        .post( users.register );
    app.route('/users/login')
        .post( users.logIn );
};