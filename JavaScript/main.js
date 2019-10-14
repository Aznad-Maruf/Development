// let, const
// let is like general variable
// const is constant.

// String, Numbers, Boolean, null, undefined ( data types )

// const name = 'john';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; // it's undefined too.

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(x);
// console.log(typeof y);
// console.log(typeof z);


// // String

// const name = 'Maruf';
// const age = 24;

// // Concatenation
// console.log('My name is ' + name+ ' and my age is '+ age );

// // Template String
// console.log(`My name is ${name} and I am ${age} years old!`);

// const hello = `My name is : ${name}\nAge is : ${age}`;

// console.log(hello);
/*
let s = 'Hello World!';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substr(0,5));
// Split
console.log(s.split(' '));
s = 'technogy, computers, it, code'

console.log(s.split(', '));
*/

// Arrays 

// const ara = [ 2, 5.2, 'Apples' ];
// ara[222] = '';
// ara.push(null);
// ara.push('Grapes');
// ara.unshift('First'); // insurt at first
// console.log(ara);
// console.log(ara.indexOf(null)); // index of an array


// Object literals

// const person = {
//     firstName: 'John',
//     lastNaem: 'Vai',
//     age: 24,
//     hobbies: ['Music', 'Travel'],
//     address:{
//         Country: 'Bangladesh',
//         City: 'Dhaka',
//         Area: 'Mirpur'
//     }
// }

// console.log(person.hobbies[1]);


// Arrrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },

    {
        id: 2,
        ac: undefined,
        text: 'Meeting with Boss',
        isCompleted: true
    },    

    {
        id: 3,
        text: 'Dentist Appoinment',
        isCompleted: false
    },
];

// console.log(todos[1].text);

// // JSON

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// loops
// for( let a_i=0; a_i<=10; a_i++ ){
//     console.log(`We are on ${a_i} iteration`);
    
// }
//while
// let a_i = 0;
// while( a_i<todos.length ){
//     console.log(`Our no. ${a_i+1} job is "${todos[a_i].text}"`);
//     a_i++;
// }

// for/of loop
// for( let todo of todos ){
//     console.log(todo.text);
    
// }

// forEach, map, filter

//foreach
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// map
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// filter
// const todoText = todos.filter(function(todo){
//     return todo.isCompleted == true;
// }).map(function(todo){
//     return todo.text;
// })

//console.log(todoText);

// for( todo of todoText ){
//     console.log(todo);
// }

// == , ===
// == tests the just the value
// const x = `10`;
// if( x == 10 ){
//     console.log(`x is 10`);   
// }
// else{
//     console.log(`x is not 10`);
    
// }

// // === tests both the value and data type.
// const x = `10`;
// if( x === 10 ){
//     console.log(`x is 10`);   
// } 
// else{
//     console.log(`x is not 10`);
    
// }

// if else compare && || 
// const x = 20, y = 30;
// if( x >= 20 || y < 30 ){
//     console.log(`x < 20 or y < 30 `);
    
// }
// else if( x > 5 && x < 10 ){
//     console.log(` x is between 4 and 10`);
    
// }
// else if( x === 10 ){
//     console.log(`x is 10`);
    
// }
// else{
//     console.log(`x is alien!`);
    
// }

// Ternary operator
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// switch works as the same as cpp.


// const color = 'green';

// switch (color){
//     case 'red':
//         console.log(`The color is ${color}`);
//         break;
//     case 'blue':
//         console.log(`The color is ${color}`);
//         break;
//     default:
//         console.log(`The color ${color} is undefined!`);
//         break;        
// }

// Function
// default values can be given in argument.
// function addNums( num1 = 1, num2 = 5 ){
//     //console.log(num1+num2);
//     return num1+num2;
// }

// let sum = addNums( 5 );
// console.log(sum);


// Arrow function ( not fun to me )
// can be used to make function shorter.
// const addNums = (num1 = 1, num2 = 1 ) => {
//     return num1+num2;
// }

// const sum = addNums( 5, 10 );
// console.log(sum);

// ara = [ 10, 20, 30, 'End'];

// ara.forEach(function(val){
//     console.log(val);
    
// });

// ara.forEach( (val) => {
//     console.log(val);
    
// } );

// ara.forEach((todo) => console.log(todo));

// OOP

// // Constructor function
// function Person( firstName, lastName, dob ){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); // date
//     // this function is prototyped below
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear();
//     // }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     this.getAge = function(){
//         return new Date().getFullYear() - this.getBirthYear();
//     }
// }

// // prototypes 
// // like this fiture. should use for all function possible

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }


// // Instantiate object

// const person1 = new Person( 'Maruf', 'Robin', '07-26-1994' );

// console.log(person1);
// console.log(person1.getFullName());
// console.log(`Age of ${person1.getFullName()} is : ${person1.getAge()}`);

// console.log(new Date());

// Class
// use class when needed it's cleaner.
// class Person{
//     constructor( firstName, lastName, dob ){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     fullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     };

//     age = function(){
//         return new Date().getFullYear() - this.dob.getFullYear();
//     }

// }

// const person1 = new Person( 'Maruf', 'Robin', '07-26-1994');

// console.log(person1.age());


































