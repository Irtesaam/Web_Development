//The broswer running has client-side JS and can perform JS queries without internet as all calculations are happening on client's device

/* Working of website : request/response flow
HTML : no website without it
CSS : without it, websites are ugly
JS : without it, users won't be able to interact with the elements (used for client-side scripting)

JS can be execuetd on browser awa server

*/

// 1) ways to print in JS
alert('This is a JS tutorial');
console.log('This is printed in console');

// 2) JavaScript console API (Application programming interface)
console.log('Hello world', 'BEN', 4 + 6) //prints "Hello world BEN 10" in console
console.warn('This is warning'); //prints in the console tab
console.error('This is an error'); //prints in the console tab
console.assert(4 == (6 - 2)); //This will pass
console.assert(4 == 6); //This will fail

// 3) Variables in JS
var n1 = 26;
var n2 = 78;
console.log(n1 + n2);

/* There are two types of data type in JS :
1) Primitive data types : undefined, null, number, string, boolean, symbol
2) Reference data types : Arrays, Objects
*/

// Number
var num1 = 4.55;
var num2 = 762;
console.log(num1, num2);

// String
var str1 = 'This is a string';
var str2 = "This is also a string";
console.log(str1, str2);

// Objects : Key-value pairs
var marks = {
    A: 34,
    B: 78,
    C: 93,
    D: 12
}
console.log(marks);

// Booleans : True or False
var a = true;
var b = false;
console.log(a);
console.log(b);

// Undefined vs Null
var und; //By default, its value is undefined
var stq; //again, an undefined value bcoz no value has been assigned to the variable
var undef = undefined; //This is defined as undefined which is same data type in und variable
var n = null; //This is a different data type than undefined. We have to define null for it to be printed but if nothing is defined then undefined is printed by default
console.log(und, stq, undef, n);

// Arrays
var arr = [2, 3, 45, 'Hello world', 3, 2, 34];
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);


/* Operators in JavaScript 
1) Arithmetic operators : +, -, *, / 
2) Assignment operators : assigns value of one variable to another variable
3) Comparison operators : == , != , >= , <= , > , < 
4) Logical operators : && (AND) , || (OR) , ! (NOT) , | (Bitwise) ,

operand is the entity on which the operator is performed
*/

// Arithmetic operator :
var c = 46;
var d = 53;
console.log('The value of c+d is :', c + d);
console.log('The value of c-d is :', c - d);
console.log('The value of c*d is :', c * d);
console.log('The value of c/d is :', c / d);

// Assignment operator :
var e = d;
e -= 7;
console.log('The value of', d, '-7 is equal to :', e);

// Comparison operators :
var f = 44;
var g = 98;
console.log('This is comparison operator');
console.log(f == g);
console.log(f != g);
console.log(f <= g);

// Logical operators :
console.log('This is AND gate')
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('This is OR gate')
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('This is NOT gate')
console.log(!true);
console.log(!false);

/* Functions in JS :
In console, elements in blue/purple color are numbers and in black/white are strings
*/

function avg(a, b) {
    return (a + b) / 2
};

c = avg(7, 16);
console.log(c);

/* Conditions statements in JS
There can be single if, or if else, or if else ladder statements as per need
*/

var age = Number(prompt());
if (age >= 18) {
    console.log('Your age is', age, 'You are an adult now');
}
else if (age < 18 && age > 0) {
    console.log('Your age is', age, 'so, you are not an adult');
}
else {
    console.log('Please enter your age in +ve numbers only');
}


/* Loops in JS
1) For loop
2) ForEach loop : Best for iterating an array
3) While loop : first the condition is checked, then only loop begins
4) Do while loop : the loop will run once, then it will jump to the condition. If its false, it will exit the loop. If not, it will continue
*/
console.log('This is printed using For loop');
var ar = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
console.log('This is printed without using any loop');
console.log(ar);

console.log('This is printed using ForEach loop');
ar.forEach(function (element) {
    console.log(element)
});

console.log('This is printed using while loop');
//Always use let instead of var because let has better memory management as it has no scope beyond the function it is used in, hence saving memory by acting as block variable
// const is used when we know for sure that we arent going to change its value in future code as it will throw error
let j = 0;
while (j < ar.length) {
    console.log(ar[j]);
    j++;
}

console.log('This is printed using Do-While loop')
let k = 0;
do {
    console.log(ar[k]);
    k++;
} while (k < ar.length)


/* Break statemnet : stop the looping and exit
Continue statement : ignore this iteration and carry the loop forward
 */
console.log('This is break statement')
for (k = 0; k < ar.length; k++) {
    if (k == 2) {
        break;
    }
    console.log(ar[k]);
}
console.log('This is continue statement')
for (k = 0; k < ar.length; k++) {
    if (k == 3) {
        continue;
    }
    console.log(ar[k]);
}

/* Array methods 
1) ar.pop() : removes element from last of array
2) ar.push() : adds element in the last of array
3) ar.length() : prints length of the array
4) ar.shift() : removes first element in the array
5) ar.unshift() : adds element in the starting of the array
6) console.log(ar.unshift('hello')) : prints new length of array
7) ar.toString() : converts entire array into string
8) ar.sort() : converts element to strings and then sorts the array as per dictionary
*/
let myArr = ['Phone', true, 'Camera', 34, 'Laptop', null, 46, false, 'TV'];
console.log(myArr);
console.log('This is sort function');
console.log(myArr.sort());
console.log('This is length of the array');
console.log(myArr.length);
console.log('This removes element from last of array');
myArr.pop();
console.log(myArr);

/* String methods :
1) mystr.length() : to print length of the string
2) .indexof() : to find index of a word in the string
3) .slice(0,12) : This slice up the string from 0th index to 11th index
4) .replace('w','e'): This replaces 1st occurence of that text with another
*/
let mystr = 'Captain Levi is humanity\'s strongest soldier';
console.log(mystr);
console.log('This is the length of the string');
console.log(mystr.length);
console.log('This is the position of Levi in the string');
console.log(mystr.indexOf('Levi'));
console.log('This slice up the string from 0th index to 11th index');
console.log(mystr.slice(0, 12));
console.log('This replaces 1st occurence of that text with another');
m = mystr.replace("Captain Levi", "Commander Erwin");
m = m.replace("strongest soldier", "bravest commander");
console.log(mystr, m);

/* Dates in JS */
let mydate = new Date(); //new is used to create new date
console.log(mydate);
console.log(mydate.getMinutes()); //gives minutes
console.log(mydate.getFullYear()); //only prints year

/* DOM Manipulation
It stands for Document Object Model
writing document in console will give the HTML file of that webpage
document.location : prints details of document and its host in console
DOM is just interface of any web document. eg : page of google, youtube, etc

DOM manipulation is used to dynamically change the page of the website

document.getElementById('click').style.border = '2px solid red' : This will target the element with id=click and style its border as 2px solid red

There are various methods used for DOM manipulation
*/

let elem = document.getElementById('click'); //Prints element with id=click
console.log(elem);

let elemclass = document.getElementsByClassName('container'); //Print elements with class=container
console.log(elemclass);

elemclass[1].style.background = 'yellow'; //targets 2nd element with class=container and changes its bgcolor to yellow

elemclass[0].classList.add('bg-primary'); //adds bg-primary class to the 1st element with class=container and hence will also modify according to the properties of bg-primary class
// Also .classList.remove() is used to remove the class from that element

let elemhtml = elemclass[0].innerHTML; //will print the inner HTML of the targeted element only
console.log(elemhtml); //similarly, using innertext will print only the text of that element

let tn = document.getElementsByTagName("div"); //all elements with tag div will be printed in console
console.log(tn);

createdelement = document.createElement('p'); //creates a paragraph element
createdelement.innerText = 'This is a created para by DOM Manipulattion'; //adds this text into that para
tn[0].appendChild(createdelement); //adds that para to the tn[0], i.e 1st div element in the webpage
//we can replace a child with .replaceChild(old, new); and it will replace the element with new one
//similarly, .removesChild() will remove an element
// document.URL will give the URL of that page
// document.scripts will print all the scripts used in that web document
// document.forms will give all the forms used in that page

//Query selector is used to select by using query for eg : sel = document.querySelectorAll('.container') will return all the containers. This selects the elemnts similarly to CSS


/* Events in JS
Anything happening on the webpage is an event and we can listen to that event using events in JS
*/

function clicked() {
    console.log('The button was clicked'); // This listens the event of clicked() and will print on console whenever we click on the button
}
window.onload = function () {
    console.log('The document was loaded') // will print this after the document is loaded. Also if we want to perform some action after loading, we can add that in fucntion() parameter
}

firstcontainer.addEventListener('click', function () {
    console.log('clicked on container'); // This adds an event listener. when someone clicks, it prints click on container in console as we clicking on that container too apart from the button
})

firstcontainer.addEventListener('mouseover', function () {
    console.log('cursor on container');
})

firstcontainer.addEventListener('click', function () { //when we click on 1st container as click is defined for 1st
    document.querySelectorAll('.container')[1].innerHTML = '<b>The container has been clicked</b>'; //Then this text prints in the 2nd container
    console.log('clicked on container');
})


/* Arrow functions 
This is how we define funtion :
function sum(a,b){
    return a+b;
}
but if we need to insert function in middle of a code, then we can simply use arrow function
sum = (a,b)=>{   //This particular syntax is called arrow function
    return a+b;
}
*/


/* SetTimeout and SetInterval 
setTimeout is used when we want to delay the execution of a function by some amount
setTimeout(function name, delay in ms)
setInterval is used when we want to repeat the execution after some delay indefinitely
setInterval(function, delay);
To stop it, let it be a variable, say clr and put it in clearInterval(variable name); in console
similarly to stop setTimeout, use clearTimeout(return variable name) to stop it from happening
*/
// logkaro = ()=>{
//     console.log('The delay in execution is of 5s'); //This will show in console after 5 sec
//}
// setTimeout(logkaro, 5000);
// clr = setInterval(logkaro, 50);


/* Local storage in JS :
It basically stores the user information on the website, like name, theme, etc. Usually the storage should be very small so it doesnt hinders user's device performance
We can add in local storage by : localStorage.setItem('name', 'captain')
To clear local storage : localStorage.clear();
To get item : localStorage.getItem('name'); //It will return captain as that is its parameter
*/


/* JSON :
JavaScript Object Notation
used for exchanging of data
JSON converts data into strings and transports to the destination and then converts it back to the JS object

*/
obj = { name: 'Captain', len: 1, a: { this: 'that' } }; // a is another object inside the object with value and keypair
// a : { this : 'tha"t'} : by default, JSON only takes double inverted comma to consider string. So if we put an inverted double quote in between, then it will escape it and will move forward. Similarly, if we put /" then it will put another backslash in output as it ignored these.
jso = JSON.stringify(obj); //This converts the object to string
console.log(jso);
console.log(typeof(jso));

// To convert this JSON string back to object, use parse function
parsed = JSON.parse('{"name":"Captain","len":1,"a":{"this":"that"}}')
console.log(parsed);


/* ECMAscript is a standard using which JS is maintained so that it runs smoothly across all browsers */