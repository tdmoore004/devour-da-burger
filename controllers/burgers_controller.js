const express = require("express");
const cat = require("../../../../class-repo/13-MVC/01-Activities/17-CatsApp/Solved/models/cat.js");
const burger = require("../models/burger.js");
const burgers = require("./models/burgers.js");

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
    burger.insertOne("burger_name", req.body.burger_name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({devoured: req.body.devoured}, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;