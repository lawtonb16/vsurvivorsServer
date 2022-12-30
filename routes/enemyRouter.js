const express = require("express");
const enemyRouter = express.Router();

const Enemy = require("../models/enemy");

enemyRouter
    .route("/")
    .get((req, res, next) => {
        Enemy.find()
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
        Enemy.create(req.body)
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
        Enemy.deleteMany()
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

enemyRouter
    .route("/:enemyId")
    .get((req, res, next) => {
        Enemy.findById(req.params.enemyId).then((enemy) => {
            res.statusCode = 200;
            res.setHeader(
                "Content-Type",
                "application/json",
            );
            res.json(enemy);
        });
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(
            `POST operation not supported on /enemies/${req.params.enemyId}`,
        );
    })
    .put((req, res) => {
        Enemy.findByIdAndUpdate(
            req.params.enemyId,
            { $set: req.body },
            { new: true },
        ).then(enemy => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
        });
    })
    .delete((req, res) => {
        Enemy.findByIdAndDelete(req.params.enemyId).then(response => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(response);
        })
    });

module.exports = enemyRouter;
