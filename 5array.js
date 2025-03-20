                                        //in js strings are immutable
                                         //in js arrays are mutable
//let array = start value
         //  [0, 1,   2,  3,  4]
let array = [10, 20, 30, 40, 50];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);


//replace the value of index 3
array[3] = 100;
console.log(array);

//push the value in array add the value
array.push(60);
console.log(array);

//pop the value in array  remove the last value
array.pop();
console.log(array);

//shift the value in array remove the first value
array.shift();
console.log(array);

//unshift the value in array add the first value
array.unshift(10);
console.log(array [3]);


//array reverse
array.reverse();
console.log(array);

//array sort
array.sort();
console.log(array);

//array join
array.join();
console.log(array);

//array slice
array.slice(1, 3);
console.log(array);

//array splice
array.splice(1, 3);
console.log(array);

//array concat
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let array3 = array1.concat(array2);
console.log(array3);

//array length
array.length;
console.log(array.length);

//array indexOf
array.indexOf(20);
console.log(array.indexOf(20));

//array lastIndexOf
array.lastIndexOf(20);
console.log(array.lastIndexOf(20));

//array find
array.find((array) => {
    return array === 10;
});
console.log(array.find((array) => {
    return array === 10;
}));

//array push
array.push(70);
console.log(array);


//array splice
array.splice(index, 1, value);
console.log(array);

//array map
array.map((array) => {
    return array * 2;
});
console.log(array);

//array filter
array.filter((array) => {
    return array > 20;
});
console.log(array);

//array reduce
array.reduce((array) => {
    return array + array;
});
console.log(array);

//array forEach
array.forEach((array) => {
    console.log(array);
});
console.log(array);

//array some
array.some((array) => {
    return array > 20;
});
console.log(array);

//array every
array.every((array) => {
    return array > 20;
});
console.log(array);

//array findIndex
array.findIndex((array) => {
    return array === 10;
});
console.log(array);


//array flat
array.flat();
console.log(array);

//array flatMap
array.flatMap((array) => {
    return array * 2;
});
console.log(array);

//array reduce
array.reduce((array) => {
    return array + array;
});
console.log(array);
