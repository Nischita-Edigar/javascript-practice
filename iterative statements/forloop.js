/*syntax----
for(initialization;test condition;increment/decrement statement)
{
    -----statement to be execute if test condition is true
}
*/
//javascript program to display numbers from 0 t0 10
for (let i=1;i<=10;i=i+1){  //increment
    console.log(i)
}
for(let i=10;i>=1;i=i-1){   //decrement
    console.log(i)
}
//print even numbers from 2 to 20
console.log("even numbers from 2-20")
for (let i=0; i<=20 ; i=i+2) {
    console.log(i)
}
//print the word "javascript" 5 times
for( let i=1;i<=5;i=i+1){
    console.log("javascript")
}
// print 5 table
for( let i =1;i<=10;i=i+1){
    console.log("5 *",i,"=",5*i)
}
