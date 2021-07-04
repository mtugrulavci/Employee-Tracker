const mysql = require('mysql2');
//connect to databae
const database = mysql.createConnection(
    {
     host: "localhost",
     //your MySQL username,
     user: "root",
     //Your MySQL password, I didn't use password since I have no password!
    // password : ""; 
     database: "organization"   
    },
    console.log("Connected to the election database.")

);
module.exports = database;