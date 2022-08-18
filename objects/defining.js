/*An object is the group of  mapped elements in an entity
 features : it  doesn't allows duplicate elements
            it allows heterogeneous elements
            it should be enclosed in a pair of square brackets {}
            it contains object values and properties 

 Examples for an object
 empty= {}  ----- empty object
 employee = {
    id:100,
    name: "allen",
    salary : 30000,
    mobile : 9999999999
}   */

 
//Creating an object
let employee = {
    id:100,
    name: "allen",
    salary : 30000,
    mobile : 9999999999
}

//Reading an object
console.log(employee)

//updating an object
employee.location = "Bangalore"
employee.salary = 40000
console.log(employee)

//Deleting an object
delete employee.location
console.log(employee)


