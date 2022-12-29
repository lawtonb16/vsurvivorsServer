const express = require('express');
const passiveRouter = express.Router();

passiveRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the passives to you');
})
.post((req, res) => {
    res.end(`Will add the passive: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /passives');
})
.delete((req, res) => {
    res.end('Deleting all passives');
});

passiveRouter.route('/:passiveId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the passive: ${req.params.passiveId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /passives/${req.params.passiveId}`);
})
.put((req, res) => {
    res.write(`Updating the passive: ${req.params.passiveId}\n`);
    res.end(`Will update the passive: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting passive: ${req.params.passiveId}`);
})

module.exports = passiveRouter;