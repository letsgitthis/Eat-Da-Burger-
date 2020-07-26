// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.all(res => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger, name, cb) {
    orm.create(burger, name, function(res) {
      cb(res);
    });
  },
  update: function(val, id, cb) {
    let eaten = val.eaten;
    orm.update(eaten, id, function(res) {
      cb(res);
    });
  },
  delete: function(eaten, id, cb) {
    orm.delete(eaten, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
