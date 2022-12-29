const express = require('express');
const characterRouter = express.Router();
const Character = require('../models/character');

characterRouter.route('/')
.get((req, res, next) => {
    Character.find()
        .then(characters => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(characters);
        })
        .catch(err => next(err));
})
.post((req, res, next) => {
    Character.create(req.body)
    .then(character => {
        console.log("Character Created", character);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.json(character);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /characters');
})
.delete((req, res,next) => {
    Character.deleteMany()
        .then(response => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(response);
        })
        .catch(err => next(err));
});

characterRouter.route('/:characterId')
.get((req, res, next) => {
    Character.findById(req.params.characterId)
        .then(character => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(character);
        })
        .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /characters/${req.params.characterId}`);
})
.put((req, res) => {
    Character.findByIdAndUpdate(req.params.characterId, {
        $set: req.body
    },
    {new: true}).then(character => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(character);
    })
})
.delete((req, res) => {
    Character.findByIdAndDelete(req.params.characterId).then(response => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
    })
})

module.exports = characterRouter;