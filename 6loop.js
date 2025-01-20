let array = [10, 20, 30, 40, 50];
console.log(array);

//loop for array       we know the value will run how many times

//let index = 0;  (starting point)
//index < array.length;  (condition)
//index++  (increment). index -- (decrement)
for (let i = 0; i < array.length; i++) {
    //if we make console.log(index) it will print the index

    //if we put console.log(array[2]) it will print the value
     
    //if we put console.log(array[index] + `${index}`) it will print the value and index ( ${index} )

    //if we put console.log(array[index] , `${index}`) it will print the value and index

    //`` is called template literal, ${} is called interpolation

    console.log(array[i] , `${i}`);
}

//loop for while           we don't know the value will run how many times

//let index = 0;  (starting point)
//index < array.length;  (condition)
//index++  (increment). index -- (decrement)
let i = 0;

//if we put while (index <= 4) it will print the value till 4
while (i < array.length) {

    //we can also use console.log(array[i] + `${i}`);

    console.log(array[i]);
    i++;
}
 
//for putting array value in [] we use push

let array1 = [];
let a = 10;
while (a <= 50) {
    array1.push(a);
    a++;
}
console.log(array1);



//IF, ELSE IF, ELSE

let A = 10;

if (A >= 10) {
    console.log("A is greater than 10");
} else if (A < 10) {
    console.log("A is less than 10");
} else {
    console.log("A is equal to 10");
}


//use the IF, ELSE IF, ELSE in object

//let array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        console.log(array[i] + " is greater than 10");
    } else if (array[i] < 10) {
        console.log(array[i] + " is less than 10");
    } else {
        console.log(array[i] + " is equal to 10");
    }
}


//use the even or odd number
//let array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i] + " is even number");
    } else {
        console.log(array[i] + " is odd number");
    }
} 

//use the even or odd number and && or ||
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i] >= 10) {
        console.log(array[i] + " is even number and greater than 10");
    } else if (array[i] % 2 == 0 && array[i] < 10) {
        console.log(array[i] + " is even number and less than 10");
    } else if (array[i] % 2 != 0 && array[i] >= 10) {
        console.log(array[i] + " is odd number and greater than 10");
    } else if (array[i] % 2 != 0 && array[i] < 10) {
        console.log(array[i] + " is odd number and less than 10");
    }
}



let o = "pradeep";
let size = 0;
for (let i of o ) {
    console.log(i);
    size++;
}
console.log(size);

 
