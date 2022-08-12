//1.Write a program to print 5 to 15 numbers using for loop
console.log("Numbers from 5 to 15 : ")
for (let i=5;i<=15;i=i+1) {
    console.log(i)
}

//2.Write a program to print 15 to 10 numbers using for loop
console.log("Numbers from 15 to 10")
for(let n = 15 ; n>=10 ; n=n-1) {
    console.log(n)
}

//3.Write program to print 1 to 10 odd numbers
console.log("Odd numbers from 1 to 10")
for(let i=1;i<=10;i=i+2) {
    console.log(i)
}

//4.Write a program to print first ten multiplies of 4
console.log("First 10 multiplies of 4 : ")
for(let i = 4;i<=40 ; i=i+4){
    console.log(i)
}

//5.Write a program to print multiplication table of 6
console.log("6 table : ")
for(let i = 1;i<10;i=i+1) {
    console.log("6 *", i , "=" , i*6)
}

//6.Write a program to print factors of 24
console.log("Factors of 24")
for(let i = 1 ; i<=24; i++) {
    if(24%i==0){
        console.log(i)
    }   
}

//7.Write a program to print fibonocci series of a number
const prompt = require('prompt-sync')()
const num = prompt("Enter a positive number : ")
let n1=0, n2=1, nextnum;
console.log('fibonocci series :')
for(let i=1; i<=num; i=i+1){
        console.log(n1);
        nextnum=nextnum<num;
        nextnum=n1+n2;
        n1=n2;
        n2=nextnum;
    }
    


    
    
    

        
    
      
    
        
     


        
    

   