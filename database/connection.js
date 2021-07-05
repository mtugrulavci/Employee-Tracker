const mysql = require('mysql2');
//connect to databae
const cTable = require('console.table');
const chalk = require('chalk');
const database = mysql.createConnection(
    {
     host: "localhost",
     //your MySQL username,
     user: "root",
     //Your MySQL password, I didn't use password since I have no password!
    // password : ""; 
     database: "organization"   
    },
    console.log("Connected to the employee database.")

);
module.exports = database;