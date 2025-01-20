//settimeout and setinterval
function hello() {
    console.log("iam second");
}
console.log("iam first");
setTimeout(hello,2000);
//1000ms = 1s 

//setinterval
setInterval(hello,2000);

//setimeout(hendler, desplaytimeout, argments)



//promise is a object to use heavy task 

//stage of promise
//pending
//fulfilled
//rejected
