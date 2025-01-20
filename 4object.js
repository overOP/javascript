let id = {
    name: "pradeep",
    age: 20,
    city: "Delhi"
}
//if we want to call the age only we use {id.age} for name {id.name} and city {id.city}
//and if we want to call 2 or more we use {id.age, id.city}
//if we want to chang the age we use {id.age = 25} or for name {id.name = "over"}
console.log(id);

//we can keep the value in function also like this
//function cat(name, color)
function cat(name = "kitty",color = "brown"){
    console.log("cat name: " , name , " cat color: " , color);
    //template literal  
    //it is single string
    console.log(`cat name: ${name} cat color: ${color}`);
}
cat("kitty","brown");

//for object 
let obj = {
    name: "over",
    age: 20,
    city: "Delhi"
}
console.log(obj.name);

//all are in string
let o = {
    "name": "over",
    "age": "20",
    "city": "Delhi"
}
console.log(o);
