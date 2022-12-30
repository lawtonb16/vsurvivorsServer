const express = require("express");
const arcanaRouter = express.Router();

const Arcana = require("../models/arcana");

arcanaRouter
    .route("/")
    .get((req, res, next) => {
        Arcana.find()
            .then((arcanas) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(arcanas);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Arcana.create(req.body)
            .then((arcana) => {
                res.statusCode = 201;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(arcana);
            })
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /arcanas");
    })
    .delete((req, res) => {
        Arcana.deleteMany().then((response) => {
            res.statusCode = 200;
            res.setHeader(
                "Content-Type",
                "application/json",
            );
            res.json(response);
        });
    });

arcanaRouter
    .route("/:arcanaId")
    .get((req, res, next) => {
        Arcana.findById(req.params.arcanaId).then(
            (arcana) => {
                res.statusCode = 200;
                res.setHeader(
                    "Content-Type",
                    "application/json",
                );
                res.json(arcana);
            },
        );
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(
            `POST operation not supported on /arcanas/${req.params.arcanaId}`,
        );
    })
    .put((req, res, next) => {
        Arcana.findByIdAndUpdate(
            req.params.arcanaId,
            { $set: req.body },
            { new: true },
        )
        .catch(err => next(err))
    })
    .delete((req, res) => {
        Arcana.findByIdAndDelete(req.params.arcanaId)
        .then(response => {
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json(response);
        }) 
    });

module.exports = arcanaRouter;
