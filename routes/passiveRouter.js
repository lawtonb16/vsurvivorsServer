const express = require("express");
const passiveRouter = express.Router();

const Passive = require("../models/passive");

passiveRouter
    .route("/")
    .get((req, res, next) => {
        Passive.find()
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
        Passive.create(req.body)
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
        Passive.deleteMany()
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

passiveRouter
    .route("/:passiveId")
    .get((req, res, next) => {
        Passive.findById(req.params.passiveId).then((passive) => {
            res.statusCode = 200;
            res.setHeader(
                "Content-Type",
                "application/json",
            );
            res.json(passive);
        });
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(
            `POST operation not supported on /enemies/${req.params.passiveId}`,
        );
    })
    .put((req, res) => {
        Passive.findByIdAndUpdate(
            req.params.passiveId,
            { $set: req.body },
            { new: true },
        ).then(passive => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
        });
    })
    .delete((req, res) => {
        Passive.findByIdAndDelete(req.params.passiveId).then(response => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(response);
        })
    });

module.exports = passiveRouter;