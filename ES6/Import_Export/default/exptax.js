/*ES6 is not compatable with web browser so we use interpiler called bebel to set the environment
Export and import is of two types 1.Default and 2. Named*/

//1.default
let tax=18
 function info() { 

      console.log("gst on some goods is 18%")
}


module.exports = info();//ES5 default for exporting only one value
// export default tax;  //ES6 default export for exporting only one value