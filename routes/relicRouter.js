const express = require("express");
const relicRouter = express.Router();

const Relic = require("../models/relic");

relicRouter
    .route("/")
    .get((req, res,next) => {
        Relic.find()
            .then((relics) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(relics);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Relic.create(req.body)
            .then((relic) => {
                res.statusCode = 201;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(relic);
            })
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /relics");
    })
    .delete((req, res, next) => {
        Relic.deleteMany()
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

relicRouter
    .route("/:relicId")
    .get((req, res, next) => {
        Relic.findById(req.params.relicId)
            .then((relic) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(relic);
            })
            .catch((err) => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(
            `POST operation not supported on /relics/${req.params.relicId}`,
        );
    })
    .put((req, res, next) => {
        Relic.findByIdAndUpdate(
            req.params.relicId,
            { $set: req.body },
            { new: true },
        )
            .then((PowerUp) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
            })
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Relic.findByIdAndDelete(req.params.relicId)
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

module.exports = relicRouter;
