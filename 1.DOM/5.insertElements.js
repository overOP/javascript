//node.append(el)    adds at the end of node (inside)
//node.prepend(el)   adds at the start of node (inside)
//node.before(el)    adds before the node(outside)
//node.after(el)     adds after node(outside)

let newbtn = document.createElement("button");
newbtn.innerText = "click me";

let div = document.querySelector("div");
div.append(newbtn);
//div.prepend(newbtn);
//div.before(newbtn);
//div.after(newbtn);


//heading

let newheading = document.createElement("h2");
newheading.innerHTML = "<i>heading</i>";

let para = document.querySelector("p");
para.after(newheading);

//we caan add like this
//document.querySelector("p").after(newheading);




//we can delete the element like this
//document.querySelector("p").remove();


let para1 = document.querySelector("p");
para1.remove(); 


