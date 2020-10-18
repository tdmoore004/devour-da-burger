const orm = require("./config/orm.js");

const burger = {

    selectAll: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (cols, vals, cb) => {
        orm.inserOne("burgers", cols, vals, (cb) => {
            cb(res);
        });
    },

    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;