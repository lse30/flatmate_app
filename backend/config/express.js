const express = require('express');
const bodyParser = require('body-parser');
const { allowCrossOriginRequestsMiddleware } = require('../app/middleware/cors.middleware');

module.exports = function () {
    // INITIALISE EXPRESS //
    const app = express();
    app.use(allowCrossOriginRequestsMiddleware);
    app.use(bodyParser.json());
    app.use(bodyParser.raw({ type: 'text/plain' }));  // for the /executeSql endpoint
    // ROUTES
    require('../app/routes/users.routes')(app);
    return app;
};
