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
};
const allRoles = ()=> {
    const sql = `SELECT name, title, salary FROM role
    LEFT JOIN department ON department.id = role.department_id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
};



module.exports = { allDepartmens,allRoles };