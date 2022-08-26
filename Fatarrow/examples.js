
let add = () => {
    console.log("Addition")
}
add()
//fat arrow function with parameters
let add1 = (a, b, c) => {
    console.log(a + b + c)
}
add1(1, 2, 3)
//Fatarrow function with return keyword
let wish = () => {
    return "Good Morning"
}
let r1 = wish();
console.log(r1)

let add3 = (a, b, c) => {
    return a + b + c
}

let r2 = add3(1, 2, 3)
console.log(r2)

//fatarrow function with one statement 
let add4= (a, b) => a + b;
console.log(add4(10, 20))