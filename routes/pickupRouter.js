const express = require("express");
const pickUpRouter = express.Router();

const PickUp = require("../models/pickUp");

pickUpRouter
    .route("/")
    .get((req, res, next) => {
        PickUp.find()
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
        PickUp.create(req.body)
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
        PickUp.deleteMany()
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

pickUpRouter
    .route("/:pickUpId")
    .get((req, res, next) => {
        PickUp.findById(req.params.pickUpId).then((PickUp) => {
            res.statusCode = 200;
            res.setHeader(
                "Content-Type",
                "application/json",
            );
            res.json(PickUp);
        });
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(
            `POST operation not supported on /enemies/${req.params.pickUpId}`,
        );
    })
    .put((req, res) => {
        PickUp.findByIdAndUpdate(
            req.params.PickUpId,
            { $set: req.body },
            { new: true },
        ).then(PickUp => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
        });
    })
    .delete((req, res) => {
        PickUp.findByIdAndDelete(req.params.pickUpId).then(response => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(response);
        })
    });

module.exports = pickUpRouter;