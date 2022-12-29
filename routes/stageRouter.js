const express = require('express');
const stageRouter = express.Router();

stageRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the stages to you');
})
.post((req, res) => {
    res.end(`Will add the stage: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /stages');
})
.delete((req, res) => {
    res.end('Deleting all stages');
});

stageRouter.route('/:stageId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the stage: ${req.params.stageId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /stages/${req.params.stageId}`);
})
.put((req, res) => {
    res.write(`Updating the stage: ${req.params.stageId}\n`);
    res.end(`Will update the stage: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting stage: ${req.params.stageId}`);
})

module.exports = stageRouter;