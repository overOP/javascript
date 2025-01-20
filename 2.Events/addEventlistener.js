/* <body>
    <h1 id="content">do you love me </h1>
  <button id="btn">yes</button>
  <button id="btn2">no</button>
    <script src="my.js"></script>
</body> */


let content = document.getElementById("content");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

let move =false

btn.addEventListener("click", () => {
    content.innerText = "yes i love you";
});
btn2.addEventListener("mouseover", () => {
    if (!move){
    btn2.style.transform = "translateX(100px)";
    }else {
        btn2.style.transform = "translateX(0)";
    }
    move = !move;
});