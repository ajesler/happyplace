var sqlite3 = require("sqlite3");

var db_name = "feedback.db";
var dbpath = "databases/"+db_name;

var db = new sqlite3.Database(dbpath, function(err){
	if (err) console.log("DB error: ",err);        
});
 
db.run("CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY AUTOINCREMENT, body TEXT NOT NULL, staff TEXT, customer TEXT)");
 
module.exports = db;
