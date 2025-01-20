//we can use querySelector to select the element by it's tag name
//by "#id"  ".class" and "tagName"


//it will return the first element

let firstElements = document.querySelector("p"); 
console.dir(firstElements);


//it will return the last element
let lastElements = document.querySelector("p:last-child"); 
console.dir(lastElements);


//it will return all the elements
let allElements = document.querySelectorAll("p"); 
console.dir(allElements);


