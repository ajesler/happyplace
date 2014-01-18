var DB = require("./DB.js");

var table = "feedback";

module.exports = {
  all: function(callback) {
    DB.all("SELECT * FROM "+table,
      function(err, rows) {
        if(err) { 
          console.log("Error with all: %j", err);
        }
        callback(err, rows);
      });
  },

  get: function(id, callback) {
    DB.get(
      "SELECT id,body,staff,customer FROM "+table+" WHERE id = ?",
      [id],
      function(err, row) {
        if(err) { 
          console.log("Error with get: %j", err);
        }
        callback(err, row);
      });
  },

  add: function(data, callback) {
    console.log("add : data : %j", data);
    DB.run(
      "INSERT INTO "+table+" (body, staff, customer) VALUES (?, ?, ?)",
      [data.body, data.staff, data.customer],
      function(err) {
        if(err) { 
          console.log("Error with add: %j", err);
        }
        callback(err);
      });
  },

  update: function(id, data, callback){
    DB.run("UPDATE "+table+" SET body = ?, staff = ?, customer = ? WHERE id = ?",
      [data.body, data.staff, data.customer, id],
      function(err){
        if(err) { 
          console.log("Error with update: %j", err);
        }
        callback(err);
      });
  },

  delete: function(id, callback){
    DB.run(
      "DELETE FROM "+table+" WHERE id = ?",
      [id],
      function(err) {
          if(err) { 
            console.log("Error with delete: %j", err);
          }
          callback(err);
      });
  }
}