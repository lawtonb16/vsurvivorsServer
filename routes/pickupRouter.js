const express = require('express');
const pickupRouter = express.Router();

pickupRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the pickups to you');
})
.post((req, res) => {
    res.end(`Will add the pickup: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /pickups');
})
.delete((req, res) => {
    res.end('Deleting all pickups');
});

pickupRouter.route('/:pickupId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the pickup: ${req.params.pickupId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /pickups/${req.params.pickupId}`);
})
.put((req, res) => {
    res.write(`Updating the pickup: ${req.params.pickupId}\n`);
    res.end(`Will update the pickup: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting pickup: ${req.params.pickupId}`);
})

module.exports = pickupRouter;