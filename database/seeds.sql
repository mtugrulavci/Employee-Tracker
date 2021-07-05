
INSERT INTO department (name)
VALUES ('Sales'),
       ('Operations'),
       ('Information Technologies'),
       ('Human Resource');


INSERT INTO role (title, salary, department_id)
VALUES
('Sales Representative', 40000.5, 1),
('Sales Manager', 70000, 1),
('Operations Manager', 95000.5, 2),
('Operations Engineer', 85000.5, 2),
('IT Manager', 125000.5, 3),
('Senior Developer', 115000.5, 3),
('Jr. Developer', 85000.5, 3),
('Data Scientist', 90000.5, 3),
('HR Manager', 75000.5, 4),
('HR Associate', 60000.5, 4);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES 
    ('John', 'Doe', 1,1),
    ('Jane', 'Doe', 2,1),
    ('Sam', 'Thully', 3,2),
    ('Robert', 'Kikao', 4,1),
    ('Esma', 'Kir', 5,2),
    ('Mark', 'You', 6,1),
    ('Simone', 'Salem', 7,3),
    ('Tom', 'Kicker', 8,3),
    ('Selim', 'Can', 9,3),
    ('Monica', 'Sevan', 10,2);