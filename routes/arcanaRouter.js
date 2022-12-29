const express = require('express');
const arcanaRouter = express.Router();

arcanaRouter.route('/')
.get((req, res) => {
    res.end('Will send all the arcanas to you');
})
.post((req, res) => {
    res.end(`Will add the arcana: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /arcanas');
})
.delete((req, res) => {
    res.end('Deleting all arcanas');
});

arcanaRouter.route('/:arcanaId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the arcana: ${req.params.arcanaId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /arcanas/${req.params.arcanaId}`);
})
.put((req, res) => {
    res.write(`Updating the arcana: ${req.params.arcanaId}\n`);
    res.end(`Will update the arcana: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting arcana: ${req.params.arcanaId}`);
})

module.exports = arcanaRouter;