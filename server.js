// TODO: Include packages needed for this application
const chalk = require('chalk');
const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./database/connection');
//const {allDepartmens,allRoles} = require('./utils/generate-tables');
const cTable = require('console.table');
const mysql = require('mysql2');

db.connect(err => {
    if (err) throw err;
    init();
  });

allDepartmens = ()=> {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
};
allRoles = ()=> {
    const sql = `SELECT name, title, salary FROM role
    LEFT JOIN department ON department.id = role.department_id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
};


const init = () => {
  console.log(chalk.bold.rgb(10, 100, 200)`
  *********************
  *                   *
  *  EMPLOYEE MANAGER * 
  *                   *
  *********************
  `);
  inquirer.prompt([
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
            allDepartmens();
        }
        if(answers.options === 'view all roles'){
            allRoles();
        }
    })

};
