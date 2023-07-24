// Import stylesheets
import './style.css';
import { Employees, User } from './interface';
import { Employee, Employee2, Manager } from './class';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log(Employee.getEmpCount());

let emp = new Employee(1, 'Quan', 'Sai Gon');

//emp.id = 1;
//emp.name = 'Quan';
emp.address = 'HCM';

console.log(emp);
console.log(emp.getNameWithAddress());
console.log(emp.login());

let Chi = new Manager(1, 'Chi', 'Hoc Mon');
console.log(Chi.getNameWithAddress());
console.log(Chi.empId);

Chi.empId = 2;
console.log(Chi.empId);

let employee: Employees = {
  name: 'Test',
  age: 1,
  id: 1,
  email: 'test@gmail.com',
  salary: 123,
};

console.log(employee);

var Users = {
  name: 'Test',
  age: 1,
  id: 1,
  email: 'test@gmail.com',
};

console.log(Users);

let test = new Employee2(11, 'John', {
  street: 'ABC',
  city: 'HCM',
  state: 'VN',
  pin: '123',
});

console.log(test);

let { name: userName, email: userLogin }: User = {
  name: 'AAA',
  email: 'aaa@gmail.com',
  id: 55,
};

console.log(userName);
console.log(userLogin);

let [user1, user2, ...restUsers]: User[] = [
  {
    name: 'AAA 1',
    email: 'aaa@gmail.com',
    id: 1,
  },
  {
    name: 'AAA 2',
    email: 'aaa@gmail.com',
    id: 2,
  },
  {
    name: 'AAA 3',
    email: 'aaa@gmail.com',
    id: 3,
  },
  {
    name: 'AAA 4',
    email: 'aaa@gmail.com',
    id: 4,
  },
];

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter((user) => user.id > 3);

console.log(result);
