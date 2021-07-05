const db = require('./../database/connection');
const cTable = require('console.table');
const mysql = require('mysql2');
const chalk = require('chalk');

const allDepartmens = ()=> {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
}
const allRoles = ()=> {
    const sql1 = `SELECT roles.title, department.name FROM roles
    LEFT JOIN department ON department.id= roles.department_id`;
    db.query(sql1, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
};




module.exports = { allDepartmens,allRoles };