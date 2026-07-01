//assignment practice (object)

let employee = {
    id: 1,
    name: "swestha",
    department: "IT",
    salary: 30000
}

//displaying the object properties
console.log(employee.id);
console.log(employee.name);
console.log(employee.department);
console.log(employee.salary);

//adding new property address with the value "Kathmandu"
employee.address ="kathmandu";
console.log(employee.address);

//updating the salary property to 60000
employee.salary = 60000;
console.log(employee.salary);

//deleting the department property from the employee object
delete employee.department;
console.log(employee);

//display the object after each operation
console.log("Employee object after all operations down below :)");
console.log(employee);
