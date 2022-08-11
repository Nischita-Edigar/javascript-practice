//single line comment
/* multi
l
i
n
e
comment */

//DATA TYPES:

  //creation of variables
var brand ="Adidas" ;
var price = 1999;
var discount = 299.99;
var ratings = 4.4;
var disc = true;
var item;
//Reading the variables
console.log(brand)
console.log(price)
console.log(discount)
console.log(ratings)
console.log(disc)
console.log(item)

//Displaying Data type
console.log(typeof brand)
console.log(typeof price)
console.log(typeof discount)
console.log(typeof ratings)
console.log(typeof disc)
console.log(typeof item)

//Updating the variables
var price=1499
console.log(price)

//Taking input from the user
const prompt=require('prompt-sync')();
var fname = prompt("first name : ");
var lname = prompt("last name : ");
console.log("your name",fname,lname);

//Identifiers
               
/*var flag =45; it is a keyward and cant be the variable name
console.log(flag) 
conditions for creating variables:
1. it should start with a-z alphabet, -,$
2.it should not starts with digit
3.it should not be a keyword
4.it should not contain any special character*/
var ABD = "cricketer"
console.log(ABD)
var abc123="basket ball" //valid
console.log(abc123)
/*var #abs = "tennis"   -------------> shows syntax error
console.log(#abs)
var bbc% ="any"
console.log(bbc%)*/

//Non Primitive data type ----Object 
//1.ARRAY
let//or var
digit =[0,1,2,3,4,5,6,7,8,9]
console.log(digit)
console.log(typeof digit)
//2.Object
var employee = {
  emp_name: "Jhon",
  emp_id : 101,
  emp_salary : 45000
}
console.log(employee)
console.log(typeof employee)

let emp = {}  //empty object
console.log(emp)
console.log(typeof emp)

var names = ['jhon','smith','michel','ram']
console.log(names)
console.log(typeof names)


let a =[1,"two",' ',true,'anything',null,undefined]
console.log(a)
console.log(typeof a)




