let pdata = document.getElementsByTagName("p")
pdata[0].innerHTML = "hello"
//.innerhtml is used to change the content
//.innertext is used to change the text  
//.style is used to change the style


let h1data = document.getElementById("h1")
h1data.style.color = "red"


//Event

btn.onmouseover = () => {
    alert("hello")
}
btn.onclick = () => {
    alert("hello")
}


btn.addEventListener("click", (Event) => {
    alert("hello")
})