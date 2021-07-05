const db = require('./../database/connection');
const cTable = require('console.table');
const mysql = require('mysql2');
const chalk = require('chalk');
const { inherits } = require('util');

const allDepartments = ()=> {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
    init();

};
const allRoles = ()=> {
    const sql = `SELECT name, title, salary FROM role
    LEFT JOIN department ON department.id = role.department_id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
};
const allEmployees = ()=> {
    const sql = `SELECT first_name, last_name, salary, title, name FROM employee
    LEFT JOIN role ON role.id = employee.role_id
    LEFT JOIN  department ON department.id = role.department_id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
};

const addDepartment = () =>{
    inquirer.prompt([
        { type: 'input',
          name: 'department',
          message: 'Please indicate department name',
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please indicate department name');
              return false;
            }
          }
        }]).then(answers=>{
       const sql = `INSERT INTO department (name)
       VALUES (?)`;
    db.query(sql, answers.department, (err, result) => {
      if (err) throw err;
      console.log('Department '+ answers.department+ ' added to the department table');
    });
        })
};


module.exports = { allDepartments,allRoles, addDepartment, allEmployees };