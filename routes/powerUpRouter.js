const express = require("express");
const powerUpRouter = express.Router();

const PowerUp = require("../models/powerUp");

powerUpRouter
    .route("/")
    .get((req, res, next) => {
        PowerUp.find()
            .then((characters) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(characters);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        PowerUp.create(req.body)
            .then((character) => {
                res.statusCode = 201;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(character);
            })
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /enemies");
    })
    .delete((req, res, next) => {
        PowerUp.deleteMany()
            .then((response) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(response);
            })
            .catch((err) => next(err));
    });

powerUpRouter
    .route("/:powerUpId")
    .get((req, res, next) => {
        PowerUp.findById(req.params.powerUpId).then(
            (PowerUp) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(PowerUp);
            },
        ).catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(
            `POST operation not supported on /enemies/${req.params.powerUpId}`,
        );
    })
    .put((req, res) => {
        PowerUp.findByIdAndUpdate(
            req.params.powerUpId,
            { $set: req.body },
            { new: true },
        ).then((PowerUp) => {
            res.statusCode = 200;
            res.setHeader(
                "Content-Type",
                "application/json",
            );
        });
    })
    .delete((req, res) => {
        PowerUp.findByIdAndDelete(
            req.params.powerUpId,
        ).then((response) => {
            res.statusCode = 200;
            res.setHeader(
                "Content-Type",
                "application/json",
            );
            res.json(response);
        });
    });

module.exports = powerUpRouter;
