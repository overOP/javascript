//Class is a program-code template for creating objects
//those objects will have some stste (variables) and some behavior (functions) inside it.

//class MyCyass {
//constructor(){...}
//myMethod(){...}
//}

//let myObj = new MyClass();

class BMW {
    constructor(){
        console.log("creating new object");
    }
    start(){
        console.log("start the car");
    }
    stop(){
        console.log("stop the car");
    }
    setBrand(){
        this.brand = brand;
    }
}

let car = new BMW();


//Comstructor()method is:
//automatically invoked by new 
//initialize the object
