const express = require('express');
const powerUpRouter = express.Router();

powerUpRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the power ups to you');
})
.post((req, res) => {
    res.end(`Will add the power up: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /power ups');
})
.delete((req, res) => {
    res.end('Deleting all power ups');
});

powerUpRouter.route('/:powerUpId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the power up: ${req.params.powerUpId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /power ups/${req.params.powerUpId}`);
})
.put((req, res) => {
    res.write(`Updating the power up: ${req.params.powerUpId}\n`);
    res.end(`Will update the power up: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting power up: ${req.params.powerUpId}`);
})

module.exports = powerUpRouter;