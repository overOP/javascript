//The super Keyword is used to call the constructor of ots parent class to access the parent's
//properties and methods.

//super(args)      calls Parent's constructor

//super.paremtMethod(args)

class Person1 {
    constructor(){
        console.log("enter parent class constructor");
        this.species = "human";
    }
    eat(){
       console.log("eat");
    }
}
class Engineer extends Person {
   constructor(){
    console.log("enter child class constructor");
       super();    //to invoke parent class constructor
       this.branch = branch;
       console.log("exit child class constructor");
   }
   work(){
       console.log("solve problems, build something");
   }
}
let engObj1 = new Engineer("chemical engg");