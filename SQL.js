//psql -U postgres   =>(to open the postgres  after this enter the password)
// \l     =>(To show all the databases)
// CREATE DATABASE company; =>(To create a new Database)
// \c company    => (to connect with that database)

// company=# CREATE TABLE employees(    =>(Created a table called employees)
//     company(# id INT,                =>(field id with datatype as integer)
//     company(# name VARCHAR(50),      =>(field name datatype character with length 50)
//     company(# email VARCHAR(50),     
//     company(# date_of_birth DATE);   =>(dateofbirth with datatype DATE)


// company=# \d =>(To show the table)

//   company-# \d employees(tablename)  =>( to show the details of that specific table )    

//  company=# DROP TABLE employees; => (to delete the table)

// company=# CREATE TABLE employee(    
//     company(# id BIGSERIAL NOT NULL PRIMARY KEY,
//     company(# name VARCHAR(50) NOT NULL,
//     company(# email VARCHAR(50) NOT NULL UNIQUE,
//     company(# date_of_birth DATE);     =>(The id should be not a null value and it should not repeat so we gave primary Key and to autogenerate the id
                                            //  the datatype bigserial given,and email)

//company=# \d employee =>(to show the details of the employee table)


// company=# INSERT INTO employee (name,email,date_of_birth)   =>(To insert fields and values into a table)
// company-# VALUES ('John','john@gmail.com',date '1990-01-01');

//SELECT * FROM employee; =>(To see the given values and fields )
//SELECT name FROM employee;  =>(To see the only name field and its values)
//company=# SELECT name,email FROM employee;    =>(It show name and email and its values)
//company=# SELECT * FROM employee ORDER BY name ASC;  =>(show table in the ascending order of name)
//company=# SELECT * FROM employee ORDER BY name DESC;  =>(Descending order)
//company=# SELECT * FROM employee ORDER BY name,id ASC;  =>(first sort in the order of name and them by id)
//company=# SELECT DISTINCT date_of_birth FROM employee;   =>(Show the distinct value if the dob is repeating only one of them will show)
//company=# SELECT * FROM employee WHERE gender='male'; =>(show the data which have male gender)
//company=# SELECT * FROM employee WHERE gender='male' AND date_of_birth='1990-01-01';  =>(show data which satisfies both the conditions)
//company=# SELECT * FROM employee WHERE gender='male' OR date_of_birth='1990-01-01';   =>(show data which satisfies any of the condition)
//company=# SELECT * FROM employee WHERE date_of_birth<'1998-01-01';  =>(Less than)
//company=# SELECT * FROM employee LIMIT 3;  =>(Only first three row will show)
//company=# SELECT * FROM employee OFFSET 2 LIMIT 1;   =>(show the 1 data after the 2 datas)
//company=# SELECT * FROM employee OFFSET 2 FETCH FIRST 2 ROWS ONLY;  => (fetching same as limit with offset )
//company=# SELECT * FROM employee WHERE place IN('Mumbai','Delhi'); =>(show data with the place having value mumbai and delhi)
//company=# SELECT * FROM employee WHERE date_of_birth BETWEEN DATE '1990-01-01' AND '1997-02-02' ;  =>(Show the data in the range between these dates)
//company=# SELECT * FROM employee where name LIKE '%a';  =>(data with name end with a)
//company=# SELECT * FROM employee where name LIKE 'A%';  =>(data with name start with case sensitive)
//company=# SELECT * FROM employee where name iLIKE '%a';  =>(data with name start with a and A)
//company-# SELECT place FROM employee GROUP BY place;  =>(It will group the place only every  distinct place will show)
//company-# SELECT place,COUNT(*) FROM employee GROUP BY place;  =>(It will give the count of each place along with it)
//company-# SELECT place,COUNT(*) FROM employee GROUP BY place ORDER BY place;  =>(It will give the place in ascending order)
//company-# SELECT place,COUNT(*) FROM employee GROUP BY place HAVING COUNT(*)>1 ORDER BY place;  =>(It will give the place which have count greater than 1)
//company-# SELECT max(salary) FROM employee;  =>(Get the maximum salary)
//company-# SELECT min(salary) FROM employee;  =>(Get the minimum salary)
//company-# SELECT avg(salary) FROM employee;  =>(Get the average salary)
//company-# SELECT round(avg(salary)) FROM employee; =>(Give the average salary rounded up)
//company-# SELECT sum(salary) FROM employee;   =>(Give the sum of the total salary)

//college=# select id,name,mark,total,(mark/total)*100 from student;  => ( we can add the percentage column by using arithmatic operations,Here the name of the column will be default)
//college=# select id,name,mark,total,(mark/total)*100 as percentage from student;  =>(here we give the column a name)
//college=# SELECT id,name,COALESCE(email,'Email not found') from students;  =>( We can give default value to a field if it doesn't have value)
//college=# SELECT NOW(); =>(current date and time)
//college=# SELECT NOW()::DATE;  =>(current date only)
//college=# SELECT NOW()::TIME;  =>(current time only)
//college=# SELECT EXTRACT (MONTH FROM NOW());  =>(extract and show the current month only)
//college=# SELECT NOW() + INTERVAL '10 YEARS';  =>(Add 10 years to the current date)
//college=# SELECT (NOW() + INTERVAL '1 MONTH')::DATE;  =>(1 month will increase and show the date only)

// college=# CREATE TABLE employees(
//     college(# id int PRIMARY KEY,
//     college(# name VARCHAR(100) NOT NULL,
//     college(# email VARCHAR(100) UNIQUE NOT NULL,
//     college(# gender VARCHAR(10) CHECK (gender='Male' OR gender='Female'),
//     college(# created_at DATE DEFAULT CURRENT_TIMESTAMP);  =>(adding the constraints at the time of creating the table)


//adding constraints after created the table
//college=# ALTER TABLE employees ADD CONSTRAINT employees_pkey PRIMARY KEY (id);  =>(adding primary key to id)
//college=# ALTER TABLE employees ALTER COLUMN name SET NOT NULL;  =>(TO give not null constraints to name)
//college=# ALTER TABLE employees ADD CONSTRAINT employees_unique_email UNIQUE (email);  =>(adding unique to email)
//college=# ALTER TABLE employees ADD CONSTRAINT employees_gender_check CHECK (gender = 'Male' or gender='female');  =>(check to gender)
//college=# ALTER TABLE employees ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;  =>(To set current time as default)
//college=# UPDATE employees SET email='john@hotmail.com' WHERE id=1;  =>(update the email of the id 1)
//college=# UPDATE employees SET email='doe@gmail.com',name='Doe' WHERE id=1;  =>(update more fields in single query)
//college=# DELETE FROM employees WHERE id=1;  =>(delete the specific id )
//college=# DELETE FROM employees ;  =>(delete the whole records from table )

// when conflict happens if u try to add new data with same id
// --- one method----
//college-# INSERT INTO employees (id,name,email,gender) VALUES (1,'Akhil','Akhil@gmail.com','Male')
// college-# ON CONFLICT (id) DO NOTHING;  =>(if same id already exists nothing will happen)

//----Second method----

// college-# INSERT INTO employees (id,name,email,gender) VALUES (2,'Akhil','Akhil@gmail.com','Male')
// college-# ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name;  =>(here name of that already existing field get updated)

//---------for joining the student table with studentAddress table

// school=# ALTER TABLE studentaddress
// school-# ADD CONSTRAINT fk_student_address
// school-# FOREIGN KEY (std_id)
// school-# REFERENCES student(id);

//-----------Inner join ------------
// school=# SELECT * FROM  student
// school-# INNER JOIN studentaddress ON student.id = studentaddress.std_id;

//-----------inner join with required fields

// school=# SELECT student.id,student.name,student.email,address.city,address.pin FROM student 
// INNER JOIN studentaddress address ON student.id=address.std_id;

//-----------LEFT JOIN
// school=# SELECT student.id,student.name,student.email,address.city,address.pin FROM student 
// LEFT JOIN studentaddress address ON student.id=address.std_id;

//-----------RIGHT JOIN
// school=# SELECT student.id,student.name,student.email,address.city,address.pin FROM student 
// RIGHT JOIN studentaddress address ON student.id=address.std_id;

//-----------FULL OUTER JOIN
// school=# SELECT student.id,student.name,student.email,address.city,address.pin FROM student 
// FULL OUTER JOIN studentaddress address ON student.id=address.std_id;

//----------UNION ( Only distinct values )

// school=# SELECT name,email FROM students UNION SELECT name,email FROM employ
// ees order by email;

//-----------UNION ALL

// school=# SELECT name,email FROM students UNION ALL SELECT name,email FROM employ
// ees order by email;

//---------------If else case

// school=# SELECT name,mark,
// school-# CASE
// school-# WHEN  mark>=100 THEN 'A+'
// school-# WHEN mark BETWEEN 150 AND 100 THEN 'A'
// school-# WHEN mark BETWEEN 100 AND 150 THEN 'B+'
// school-# ELSE 'B'
// school-# END as grade
// school-# FROM students;




