//Without callback 
let calculate=(a,b,operation)=>{
    if(operation=="sum"){
        return a+b
    }
    if(operation=="multiply"){
        return a * b
    }
}
let r1=calculate(2,5,"sum");
let r2=calculate(3,6,"multiply");
console.log(r1);
console.log(r2);

//with callback
let sum1=(a1,b1)=>{
    return a1+b1
}
let multiply1=(a1,b1)=>{
    return a1*b1
}
let calculate1=(a1,b1,callback)=>{
    return callback(a1,b1)
}
let result1=calculate1(2,3,sum1)
let result2=calculate1(4,7,multiply1)
console.log(result1);
console.log(result2);