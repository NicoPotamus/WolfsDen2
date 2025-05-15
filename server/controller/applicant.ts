const model = require('../model/applicant');
const { Applicant } = model;
const express = require('express');
const app = express.Router();

app.get("/", (req, res, next) => {
    model 
        .getAll()
        .then((result) => res.json(result))
        .catch(next);
})
    .get("/:id", (req, res, next) => {
        model
            .getOne(req.params.id)
            .then((result) => res.json(result))
            .catch(next);
    })
    .post("/", (req, res, next) => {
        model
            .create(req.body)
            .then((result) => res.json(result))
            .catch(next);
    })
    .delete("/:id", (req, res, next) => {
        model
            .remove(req.params.id)
            .then((result) => res.json(result))
            .catch(next);
    });

    module.exports = app;