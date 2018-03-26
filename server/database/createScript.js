'use strict';
var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('engel&volkers.sqlite');
console.log("Running the creation script");
	
db.serialize( () => {
  db.run(`CREATE TABLE IF NOT EXISTS clients 
            (id integer PRIMARY KEY,
            first_name text NOT NULL, 
            last_name text, 
            telephone text, 
            city text, 
            street text, 
            zip_code text)`);
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});
