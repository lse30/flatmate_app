const users = require('../controllers/users.controller');
const authenticate = require('../middleware/authenticate')

module.exports = function (app) {
    app.route('/users')
        .get( users.viewUsers );
    app.route('/users/register')
        .post( users.register );
    app.route('/users/login')
        .post( users.logIn );
    app.route('/users/logout')
        .post(authenticate.loginRequired, users.logOut)
    app.route('/users/:id')
        .get(authenticate.loginRequired, users.getUserInfo)
};