const express = require('express');
// const bodyParser = require('body-parser');


module.exports = function () {
    // INITIALISE EXPRESS //
    const app = express();
    // ROUTES
    require('../app/routes/users.routes')(app);
    return app;
};
