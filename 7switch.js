//let key is color & value is red
//if we put let color = "green" it will print green
//if we put let color = "nothing" it will print default

//if we remove all break and put let color = "nothing" it will print the last value
//if we remove all break and put let color = "green" it will print from green to default
//if we remove all break and put let color = "red" it will print from red to default

//

let color = "green";
switch (color) {
    case "red":
        console.log("color is red");
        //break is used to stop the code
        break;
    case "blue":
        console.log("color is blue");
        break;
    case "green":
        console.log("color is green");
        break;
        //default is like else
    default:
        console.log("color is not red, blue or green");
        break;
}

//new array using map & filter


let users = [
    { id:1, name: "John",age: 30, active: true },
     { id:2, name: "Jane", age: 25,active: false}, 
     { id:3, name: "Alice", age: 25,active: true },
    ]

    //if it is more than one line we use {} and return
    //if it is only one line we use ()

    //we can rite this way also

    //let activeUsers = users.filter(user => user.active);
    //if we need to print index also we use (user,index)
    //let activeUsers = users.filter((user,index) => user.active);

let activeUsers = users.filter((user) => {
    //if we put user.active = true it will print only true
    //if we put user.active = false it will print only false
    return user.active;
});
console.log(activeUsers);
console.log(users);


//combining map and filter
//filter active users  and get their names
let activeUserNames = users.filter((user) => user.active).map((user) => user.name);
console.log(activeUserNames);
