const users = require('../controllers/users.controller');


module.exports = function (app) {
    app.route('/users')
    .get( users.viewUsers );
};