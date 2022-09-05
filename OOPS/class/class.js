//class is a template/design/plan to construct objects

/*Example 1
class employee{ }
console.log(new employee())
console.log(new employee())
console.log(new employee())
console.log(new employee())
console.log(new employee())   //can create as many as objects in a class


//Example 2
class student{
    roll_no = 491;
    name = "ram";
    get_stu_details(){
        return "Displaying student details"
    }
}
let s1=new student();
let s2=new student();
console.log(s1.roll_no)
console.log(s2.roll_no)
console.log(s1.get_stu_details())


//Example 3
class Acc {
    min_Bal = 500
}
let acc1 = new Account()
let acc2 = new Account()
console.log(acc1.min_Bal)
console.log(acc2.min_Bal)*/

//Example 4
class Account {
    min_Bal = 5000;
    open_Account() {
        console.log("Account Opened Succesfully...!")
    }
    deposit_Amount() {
        console.log("Amount Deposited Successfully...!")
    }
    withdraw() {
        console.log("No Amount...!")
    }
    get_Bal() {
        console.log("100 CR...!")
    }
    get_St() {
        console.log("Wait for sometimes...!")
    }
    close_Account() {
        console.log("Account closed successfully...!")
    }
}
let a1 = new Account();
console.log(a1)
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.withdraw()
a1.get_Bal()
a1.get_St()
a1.close_Account()