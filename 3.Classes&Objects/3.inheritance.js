// inheitance is passing down properties & methods from parent class to child class
//class Parent {
//}

//class Child extends Parent {
//}

//if Child & Parent havr same method, chold's method will be used.[Method Overriding]


class Parent {
    over(){
    console.log("over");
  }
}

class Child extends Parent {
}
let obj = new Child();

//2nd way
 class Person {
     eat(){
        console.log("eat");
     }
     sleep(){
        console.log("sleep");
     }
}
class Engineer extends Person {
    work(){
        console.log("solve problems, build something");
    }
}
let pradeepobj = new Engineer();