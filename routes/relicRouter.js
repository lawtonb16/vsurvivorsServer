const express = require('express');
const relicRouter = express.Router();

relicRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the relics to you');
})
.post((req, res) => {
    res.end(`Will add the relic: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /relics');
})
.delete((req, res) => {
    res.end('Deleting all relics');
});

relicRouter.route('/:relicId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the relic: ${req.params.relicId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /relics/${req.params.relicId}`);
})
.put((req, res) => {
    res.write(`Updating the relic: ${req.params.relicId}\n`);
    res.end(`Will update the relic: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting relic: ${req.params.relicId}`);
})

module.exports = relicRouter;