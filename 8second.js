
function countdown(start) {
    console.log(start);
    if (start <= 0) {
        cleryInterval(intervalid);
        console.log("countdown finished");
    }
    else {
        startValue--;
    }
}
let startValue = 10;
//interval id sanding
//setinterval
const intervalid = setInterval(() => countdown(startValue), 1000);



