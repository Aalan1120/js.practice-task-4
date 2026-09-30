// BASIC FUNCTIONS

// 1. Function hello
function hello() {
    console.log("Hello Everyone");
}
hello();

// 2. Function welcome
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

// 3. Function navi
function navi() {
    console.log("Aalan");
}
navi();

// 4. Function message with three messages
function message() {
    console.log("Hiii");
    console.log("Hey!!!");
    console.log("Byeeeeee");
}
message();

// 5. Function numbers - print 1 to 5
function numbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
numbers();

// 6. Function check with if condition
function check() {
    let age = 20;
    if (age >= 18) {
        console.log("You are eligible.");
    }
}
check();

// 7. Function details
function details() {
    console.log("Name: Aalan);
    console.log("Qualification: B.Tech IT");
    console.log("Role: Front End Developer");
}
details();

// 8. Function company
function company() {
    console.log("Stackly");
}
company();

// 9. Call welcomeUser three times
function welcomeUser() {
    console.log("Welcome User");
}
welcomeUser();
welcomeUser();
welcomeUser();

// 10. Two different functions
function a() {
    console.log("First");
}
function b() {
    console.log("Second");
}
a();
b();


// PARAMETERS & ARGUMENTS

// 11. One parameter
function displayValue(a) {
    console.log(a);
}
displayValue("JavaScript");

// 12. Two parameters
function displayTwoValues(a, b) {
    console.log(a);
    console.log(b);
}
displayTwoValues(10, 20);

// 13. Addition
function add(a, b) {
    console.log(a + b);
}
add(10, 20);

// 14. Subtraction
function sub(a, b) {
    console.log(a - b);
}
sub(20, 10);

// 15. Multiplication
function multiply(a, b) {
    console.log(a * b);
}
multiply(10, 5);

// 16. Division
function divide(a, b) {
    console.log(a / b);
}
divide(20, 5);

// 17. Student details
function student(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
student("Aalan", 24);

// 18. Employee details
function employee(name, role, salary) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Salary:", salary);
}
employee("Aalan", "Front End Developer", 42000);

// 19. Four parameters
function fourValues(a, b, c, d) {
    console.log(a, b, c, d);
}
fourValues(10, 20, 30, 40);

// 20. Six parameters
function sixValues(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
sixValues(10, 20, 30, 40, 50, 60);


// DEFAULT PARAMETERS

// 21. Student with default department
function studentDetails(name, department = "Computer Science", cgpa) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}
studentDetails("Aalan", undefined, 8.5);

// 22. User with default age
function user(name, age = 18) {
    console.log("Name:", name);
    console.log("Age:", age);
}
user("Aalan");

// 23. Employee with default role
function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Aalan");

// 24. Form with default disability
function form(name, department, cgpa, disability = "no") {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
    console.log("Disability:", disability);
}
form("Aalan", "Computer Science", 8.5);
form("Bryant", "Information Technology", 9.0, "yes");

// 25. Two normal parameters and one default parameter
function course(name, duration, mode = "Online") {
    console.log("Name:", name);
    console.log("Duration:", duration);
    console.log("Mode:", mode);
}
course("Java", "3 Months");
course("Python", "4 Months", "Offline");


// RETURN

// 26. Return addition
function Add(a, b) {
    return a + b;
}
console.log(Add(10, 20));

// 27. Return subtraction
function Sub(a, b) {
    return a - b;
}
console.log(Sub(20, 10));

// 28. Return multiplication
function Multiply(a, b) {
    return a * b;
}
console.log(Multiply(10, 5));

// 29. Return division
function Divide(a, b) {
    return a / b;
}
console.log(Divide(20, 5));

// 30. Salary function
function salary() {
    return 40000;
}
let mySalary = salary();
console.log(mySalary);

// 31. Accept and return employee salary
function Salary(salary) {
    return salary;
}
console.log(eSalary(50000));

// 32. Return person's name
function person() {
    return "Aalan";
}
let name = person();
console.log(name);

// 33. Pass or Fail
function result(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(result(75));
console.log(result(25));

// 34. Return discount value
function discountValue(price, discount) {
    return price * discount / 100;
}
console.log(discountValue(1000, 10));

// 35. Return result and use it in another function
function calculate(a, b) {
    return a + b;
}
function displayResult(value) {
    console.log("Result:", value);
}
let result = calculate(10, 20);
displayResult(result);


// OUTER SCOPE

// 36. Variable outside function
let message = "Hello";
function showMessage() {
    console.log(message);
}
showMessage();

// 37. Object outside function
let person = {
    name: "Aalan",
    designation: "Front End Developer"
};
function showPerson() {
    console.log(person.name);
    console.log(person.designation);
}
showPerson();

// 38. Salary outside function and add bonus
let Salary = 40000;
function addBonus() {
    let bonus = 5000;
    console.log(Salary + bonus);
}
addBonus();

// 39. Employee object outside function
let employee = {
    name: "Aalan",
    role: "Front End Developer",
    salary: 50000
};
function showEmployee() {
    console.log(employeeInfo.name);
    console.log(employeeInfo.role);
    console.log(employeeInfo.salary);
}
showEmployee();

// 40. Two functions accessing same outer variable
let count = 10;
function showCount() {
    console.log("Count:", count);
}
function doubleCount() {
    console.log("Double:", count * 2);
}
showCount();
doubleCount();


// NAMED, ANONYMOUS & ARROW FUNCTIONS

// 41. Named function with parameter
function namedFunction(value) {
    console.log(value);
}
namedFunction("Hello JavaScript");

// 42. Anonymous function stored in variable
let anonymousFunction = function(value) {
    console.log(value);
};
anonymousFunction("Anonymous Function");

// 43. Arrow function with one parameter
let arrowFunction = (value) => {
    console.log(value);
};
arrowFunction("Arrow Function");

// 44. Arrow function with two parameters
let arrowAdd = (a, b) => {
    return a + b;
};
console.log(arrowAdd(10, 20));

// 45. Named, anonymous and arrow functions
function namedAdd(a, b) {
    return a + b;
}
let anonymousAdd = function(a, b) {
    return a + b;
};
let arrowAddition = (a, b) => {
    return a + b;
};
console.log(namedAdd(10, 20));
console.log(anonymousAdd(10, 20));
console.log(arrowAddition(10, 20));


// IIFE

// 46. Simple IIFE
(function() {
    console.log("Hello");
})();

// 47. IIFE with name parameter
(function(name) {
    console.log("Hello " + name);
})("Aalan");

// 48. IIFE with product and discount
(function(product, discount) {
    console.log("Special Offer: " + product +" is available with " + discount + "% discount.");
})("Laptop", 20);


// CALLBACK & HIGHER-ORDER FUNCTIONS

// 49. Add function with callback
function add1(callback,a,b){
    console.log("add",a+b);
    callback(a,b);
}
function callback(a ,b){
    console.log(a,b)
}
add1(callback,40,80);

// 50. Sub function as callback
function subs (a,b){
    console.log("sub",a-b)
};
function added  (callback,a,b){
    console.log("add",a+b);
    callback(a,b);
}
added(subs,10,40)
