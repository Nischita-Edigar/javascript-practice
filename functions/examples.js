//declaring a function
function wish(){
    console.log("Hello,How are you")
}
//calling a function
wish()
wish()  //it can be call any number of times

//addition using fuction
function add(a,b){
    console.log(a+b)
}
add(2,4)         //6
add('Hello', 'Fine')   //HelloFine
add(10) //NaN
add(10, 'Bye')   //10Bye

//Taking default value
function sub(a,b,c=1){
    console.log(a+b-c)
}
sub(2,5) //it takes default value of c as 1 > 6
sub(2,4,7) //it redeclares value of c > -1


//using return
function wish(message){
    return 'Hey'+ message
}
let message1=wish("gm")
console.log(message1)

//using return
function sum(a,b){
    return a+b
}
let result1=sum(10,20)
console.log(result1)
let result2=sum(20,2)
console.log(result2)



