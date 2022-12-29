const express = require('express');
const weaponRouter = express.Router();

weaponRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the weapons to you');
})
.post((req, res) => {
    res.end(`Will add the weapon: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /weapons');
})
.delete((req, res) => {
    res.end('Deleting all weapons');
});

weaponRouter.route('/:weaponId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the weapon: ${req.params.weaponId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /weapons/${req.params.weaponId}`);
})
.put((req, res) => {
    res.write(`Updating the weapon: ${req.params.weaponId}\n`);
    res.end(`Will update the weapon: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting weapon: ${req.params.weaponId}`);
})

module.exports = weaponRouter;