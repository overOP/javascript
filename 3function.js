//name is reserve key word
                 // in function we can (hoisting) call up side 
        //sum();         
    //function sum (parameter)    
function sum (){
    let a = 10 + 5;
    console.log(a);
}
// we call 
     //sum(argument);
sum();

//Arrow function
//es6
let o = () => {
    let a = 100 + 5;
    console.log(a);
}
o();

//Arrow function
const p = (a, b) => {
    const c = a + b;
    console.log(c);
}
p(15, 5);


//parameter is a and b
function addition(a, b){
    let c = a + b;
    console.log(c);
}
//argument is 20 and 5
addition(20, 5);


function subtraction(a, b){
    let c = a - b;
    console.log(c);
}
subtraction(30, 5);


function multiplication(a, b){
    let c = a * b;
    console.log(c);
}
multiplication(3, 5);


function division(a, b){
    let c = a / b;
    console.log(c);
}
division(100, 5);


function modulus(a, b){
    let c = a % b;
    console.log(c);
}
modulus(50, 5);


function exponential(a, b){
    let c = a ** b;
    console.log(c);
}
exponential(2, 5);


function increment(a){
    let c = ++a;
    console.log(c);
}
increment(10);


function decrement(a){
    let c = --a;
    console.log(c);
}
decrement(9);


function negation(a){
    let c = -a;
    console.log(c);
}
negation(10);


console.log("forEach")
//forEach is used to loop the array
//callback function we use foEach
 let array = [1, 2, 3, 4, 5];
 array.forEach((array) => {
    console.log(array);
 })

 //also in string
 let string = ["pradeep","chaudhary"];
 //also we can use index and array
 string.forEach((string,index,array) => {
    //for big string we ues string.toUpperCase()
    console.log(string.toUpperCase(),index,array);
 });

 console.log("map")
 //map function
 //map is used to replace the value
//map is loop
 let array4 = [35, 26, 39, 42, 45];
 array.map((value) => {
    return value;
 });
 console.log(array4);


 //loop is map, filter, foreach

//map is used to replace the value
//map is loop
let array1 = [10, 20, 30, 40, 50];
let array2 = array.map((value) => {
    return value * 2;
});
console.log(array1);
console.log(array2);


//forEach old is change the value
console.log("forEach")
//original list
const list = ["apple", "banana", "cherry", "date", "elderberry"];
//forEach is function & value is list 
//all ways fist is value & second is index 
list.forEach((value,index) => {
    //we can keep value live this way ("i love ")
    console.log(value , " " , `${index}`);
});

 console.log("filter")
//filter is used to filter the value
//filter is loop
let array3 = [1,2,3,4,5,6];
let array5 = array3.filter((value) => {
    return value % 2 === 0;
});
console.log(array3);
console.log(array5);


console.log("reduce")
//Reduce is used to reduce the value
//Performs some operations & reduces the array to a single value . it returns a single value 
let array6 = [10, 20, 30, 40, 50];
let array7 = array6.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log(array6);
console.log(array7);



//if we won't to now the largest value
let array8 = [50, 20, 30, 40, 10];
let array9 = array8.reduce((previousValue, currentValue) => {
    return previousValue > currentValue ? previousValue : currentValue;
});
console.log(array8);
console.log(array9);