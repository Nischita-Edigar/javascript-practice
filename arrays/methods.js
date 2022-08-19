//Length is a property of an object

//Finding the length of an array
let size=['xs','S','M','L','xl','xxl',[],{}]
console.log(size)
console.log(size.length)
if(size.length>0){
    console.log("The length of an array is ",size.length)
}
else{
    console.log("given array is an empty array")
}


//Reading elements of an array of unknown length
let arr=[67,54,78,90,'jk','pq','ab',2,6,7,90,0]
for (let i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}

//pop() method is used to delete the last item of an array
let removed_item = arr.pop()
console.log(removed_item)
console.log(arr)
arr.pop()
console.log(arr)

//shift() method is used to delete the first item of an array
arr.shift()
console.log(arr)

//push() method is used to append the element at the end of an array
arr.push(21)
console.log(arr)

//unshift() method is used to append the element at the begining of an array
arr.unshift(11)
console.log(arr)

//indexof() method is used to find the index of an element in an array
index = arr.indexOf(78)
console.log(index)

//reverse() method is used to diplay the Reversal of an array
console.log(arr.reverse())

//concat() method is used to concate two arrays
let fruits = ["Banana", "Orange", "Apple", "Mango"];
merge=arr.concat(fruits)   //merge=arr.concat(array1,array2,..) for multiple array concatinatiom
console.log(merge)
myfruits= fruits.concat('Kiwi')  //adding an element to an existing array
console.log(myfruits)

//splice() method is used to add and delete new items in an array at any index
newfruits=fruits.splice(2,2,"lemon","pine","guava"); //first argument-where to add element 2nd argument-how much elements to delete rest adds elements based on 1st parameter
console.log(newfruits)
console.log(fruits)

//slice() method slices out a piece of an array into a new array
slic_frts=fruits.slice(2)  //it can take 2 arguments specifying from where to where--slice(2,4)
console.log(slic_frts)

//toString() method is used to convert array into the string
fruit=fruits.toString()
console.log(fruit)*/

//sort() method is used to sort the elements in an alphabetical or numerical order
fruits.sort()
console.log(fruits)

//reverse() method is used to reverse the elements of an array
fruits.reverse()
console.log(fruits)
/*arr.sort()
console.log(arr) it gives first preference to the numbers and then alphabets*/



