const express = require("express");
const router = express.Router();
const hasMutation = require("../helpers/hasMutation");
const Mutation = require("../models/Mutations");
const No_Mutation = require("../models/No_Mutations");

router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

router.post("/mutation", (req, res, next) => {
  let dna = [];
  req.body.dna.map((a) => dna.push(a));

  let response = hasMutation(dna);

  if (response) {
    Mutation.create({
      status: 200,
      mutation: response,
      DNA: dna,
    })
      .then(() => {
        res.status(200).json({
          status: `${res.statusCode}-OK`,
          mutation: response,
          DNA: dna,
        });
      })
      .catch((err) => {
        res.status(500).json({
          err,
          msg: "Se produjo un error inesperado. inténtelo de nuevo más tarde",
        });
      });
  } else {
    No_Mutation.create({
      status: 403,
      mutation: response,
      DNA: dna,
    })
      .then(() => {
        res.status(403).json({
          status: `${res.statusCode}-Forbidden`,
          mutation: response,
          DNA: dna,
        });
      })
      .catch((err) => {
        res.status(500).json({
          err,
          msg: "Se produjo un error inesperado. inténtelo de nuevo más tarde",
        });
      });
  }
});

module.exports = router;
