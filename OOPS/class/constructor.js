class user{
    constructor(){
        console.log("user=constructor")
    }
}
  new user()

  //Example 2
  class student{
    roll;
    name;
    grade;
    constructor(Roll_number,student_Name,student_grade){
        console.log("Student Details")
        this.roll=Roll_number;
        this.name=student_Name;
        this.grade=student_grade;
    }
    get_details(){
        console.log("Here is the student details")
    }
  }
  let s1=new student(491,"Jhon",'v')
  console.log(s1)
  s1.get_details()

  //Example 3
  class employee{
    eid;
    ename;
    setEid(id){
        this.eid=id;
    }
    getEid(){
        return this.eid
    }
    setEname(name){
        this.ename=name
    }
    getEname(){
        return this.ename
    }
  }
  let e1=new employee()
  e1.setEid(101)
  e1.setEname("Rada")
  console.log(e1)
  console.log(e1.getEname())  //can create any number of objects
