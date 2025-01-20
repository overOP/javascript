//node.addEventListener(event, handler)
//node.removeEventListener(event, handler)

//Note: the callback reference should be same to remove 

// addEventListener we can do mantple work of all the events

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    console.log("1st addEventListener");
})

btn3.addEventListener("click", () => {
    console.log("2nd addEventListener");
})

btn3.addEventListener("click", () => {
    console.log("3rd addEventListener");
})

btn3.addEventListener("click", () => {
    console.log("4th addEventListener");
})

//for removeEventListener
//let hand = () => {
    //console.log("1st addEventListener");
//}
//btn3.addEventListener("click", hand);

//btn3.removeEventListener("click", hand);