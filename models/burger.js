// Requiring in ORM file.
const orm = require("../config/orm.js");

const burger = {

    // Calling the selectAll ORM function with db specific information
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    // Calling the insertOne function with db specific information
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },

    // Calling the updateOne function with db specific information
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;