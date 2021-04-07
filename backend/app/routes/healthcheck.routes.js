module.exports = function (app) {
    app.route('/healthCheck')
        .get((req, res) => {
            console.log("I am Healthy")
            res.sendStatus(200)
        })
};