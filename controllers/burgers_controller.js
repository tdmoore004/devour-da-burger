const express = require("express");
const burgers = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burgers.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burgers.insertOne("burger_name", req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne({devoured: req.body.devoured}, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;