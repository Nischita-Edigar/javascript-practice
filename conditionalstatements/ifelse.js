let salary= 20000
console.log(salary)
if(salary>=20000){
    console.log("Eligible for IT return")
}
else{
    console.log("Not Eligible")
}


//Flag in if else statement
var flag = "Hello"
if (flag) {
    console.log("GM")
}
else {
    console.log("GN")
}


//0 or 1 or any in if else statement
if(0){    //use 1 or any number instead of 0 it prints Hello
    console.log("Hello")
}
else{
    console.log("Bye-Bye")
} 


//To print number is even or odd
let digit = 24
if(digit%2==0){
    console.log("Given number is Even")
}
else{
    console.log("Given Number is odd")
}


//Logical operator in if else statement
let ename="jhon"
let experience=7
if(ename= "mathew" || experience>=5)   {    //if(ename="mathew" && experience>=5){
    console.log("Eligible for senior post")
}
else{
    console.log("Not Eligible for senior post")
}