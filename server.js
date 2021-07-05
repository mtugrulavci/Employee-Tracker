// TODO: Include packages needed for this application
const chalk = require('chalk');
const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./database/connection');
//const { allDepartments,allRoles, addDepartment, allEmployees }= require('./utils/generate-tables');
const cTable = require('console.table');
const mysql = require('mysql2');

db.connect(err => {
    if (err) throw err;
    board();
  });

  const allDepartments = ()=> {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
    init();
};
const board =() =>{
console.log(chalk.bold.rgb(10, 100, 200)`
=======================
=                     = 
=  EMPLOYEE TRACKER   =
=                     =
=======================    `);
init();
}

const allRoles = ()=> {
    const sql = `SELECT name, title, salary FROM role
    LEFT JOIN department ON department.id = role.department_id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
      init();
    });
};
const allEmployees = ()=> {
    const sql = `SELECT first_name, last_name, salary, title, name FROM employee
    LEFT JOIN role ON role.id = employee.role_id
    LEFT JOIN  department ON department.id = role.department_id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
      init();
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
    init();
        })
};


const init = () => {

 return  inquirer.prompt([
        { 
            type: 'list',
            name: 'options',
            message: 'Please indicate your query!',
            choices : ['view all departments',
                       'view all roles', 
                       'view all employees',
                       'add a department',
                       'add a role',
                       'add an employee',
                       'update an employee role']
        }
    ]).then((answers)=>{
        if(answers.options === 'view all departments'){
            allDepartments();
        }
        if(answers.options === 'view all roles'){
            allRoles();
        }
        if(answers.options === 'view all employees'){
            allEmployees();
        }
        if(answers.options === 'add a department'){
            addDepartment();
        }
        if(answers.options === 'add a role'){
            addRole();
        }
    })
};

