const authenticate = require('../middleware/authenticate')
const flats = require('../controllers/flats.controller')

module.exports = function (app) {
    app.route('/flats')
        .post(authenticate.loginRequired, flats.createFlat);

};