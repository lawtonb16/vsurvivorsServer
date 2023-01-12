const express = require("express");
const Stage = require("../models/stage");
const stageRouter = express.Router();

stageRouter
    .route("/")
    .get((req, res, next) => {
        Stage.find()
            .then((stages) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(stages);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Stage.create(req.body)
            .then((stage) => {
                res.statusCode = 201;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(stage);
            })
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /stages");
    })
    .delete((req, res, next) => {
        Stage.deleteMany()
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

stageRouter
    .route("/:stageId")
    .get((req, res, next) => {
        Stage.findById(req.params.stageId)
            .then((stage) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(stage);
            })
            .catch((err) => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(
            `POST operation not supported on /stages/${req.params.stageId}`,
        );
    })
    .put((req, res, next) => {
        Stage.findByIdAndUpdate(
            req.params.stageId,
            { $set: req.body },
            { new: true },
        )
            .then((stage) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(stage);
            })
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Stage.findByIdAndDelete(req.params.stageId)
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

module.exports = stageRouter;
