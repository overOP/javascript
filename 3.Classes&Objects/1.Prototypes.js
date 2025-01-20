//Prototypes in js 

//A javaScript object is an entity having state and behavior (propeties and method)
//JS objects have a spoecial property called prototype.
//We can set protptype using__protp__


// IF object & protptype have same method, object,s method will be used.


let employee = {
calcTax() {
  console.log("10");  
}
}
let pradeep = {
    salary : 10000,
}
pradeep.__proto__ = employee;