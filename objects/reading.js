//Reading elemnts of an object
let employee = {
    id:100,
    name: "Allen",
    salary : 30000,
    mobile : 9999999999,
    location : "Bangalore"
}
console.log(employee)  //reading whole object
console.log(employee.name)
console.log(employee.id)
console.log(employee.salary)  //reading particular key value
console.log(employee.mobile)
console.log(employee.location)

//using for in loop
for(emp in employee){
    console.log(employee[emp])  //reading values
}
/*for (let i = 0; i <= employee.length - 1; i++) {
    console.log(employee[i].name)
} 
for loop,while and do while supports itterables like array but not objects*/

   