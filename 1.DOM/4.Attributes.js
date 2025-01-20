//getAttribute(attr)   to get the attribute value 
//setAttribute(attr, value)   to set the attribute value

//node.style 

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));


div.style.fontSize = "50px";
div.innerText = "Hello it me pradeep chaudhary";
div.style.backgroundColor = "green";

div.style.visibility = "hidden";  