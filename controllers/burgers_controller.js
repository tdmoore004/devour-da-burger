// Requiring in Express and Burgers model
const express = require("express");
const burgers = require("../models/burger.js");

// Setting up express router.
const router = express.Router();

// Route for selecting all items in the table
router.get("/", (req, res) => {
    burgers.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Setting up route for posting a new burger to the table
router.post("/api/burgers", (req, res) => {
    burgers.insertOne("burger_name", req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

// Route for updating item on table.
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