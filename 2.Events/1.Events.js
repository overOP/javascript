// the change in the state of an object is known as an Event 
//Events are fired to notify code of "interesting changes" that may affect code execution.

//Mouse events(click, double click etc.)
//Keyboard events (Keypress, Keyup, Keydown)
//Form events (submit etc.)
//Print event & many more



let btn = document.querySelector("#btn");
btn.onclick = () => {
    console.log("yo y o yo ");
    let a = 25 ;
    a++;
    console.log(a);
}


let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("it me oiver");
}