const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");

router.get("/stats", (req, res, next) => {
  Stats.find({ id: 1})
    .then((data) => res.status(201).json({ data }))
    .catch((err) => {
      res
        .status(500)
        .json({
          err,
          msg: "No se pudo mostrar los datos. inténtelo de nuevo más tarde",
        });
    });
});

module.exports = router;
