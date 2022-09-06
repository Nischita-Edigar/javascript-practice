class Parent {
    assets = '100CR'
    get_Good_Qualities() {
        console.log("All Parent are Good")
    }
}
class Child extends Parent {
    get_Naughty_Qualities() {
        console.log("All Children are naughty")
    }
}
let c1 = new Child();
console.log(c1.assets)
c1.get_Good_Qualities()
c1.get_Naughty_Qualities()

//Using Constructor 

class Parent {
    constructor() {
        console.log("Parent Class Construtor")
    }
}
class Child extends Parent {
    constructor() {
        super();
        console.log("Child Class Constructor")
    }
}
new Child();


class Account {
    constructor(name, email) {
        this.acc_Name = name;
        this.acc_Email = email
    }
}
class Saving_Account extends Account {
    constructor(id, name, email, amount) {
        super(name, email);
        this.acc_Id = id;
        this.acc_Amount = amount
    }
}
let c1 = new Saving_Account(101, 'Rahul', 'rahul@gmail.com', 50000)
console.log(c1)
class Current_Account extends Account {
    constructor(id, name, email, amount, type) {
        super(name, email);
        this.acc_Id = id;
        this.acc_Amount = amount
        this.acc_Type = type

    }
}
let c2 = new Current_Account(102, "Priya", 'priya@vadra.com', 50000000, 'super_Current');
console.log(c2)
