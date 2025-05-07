function countdown(start) {
    console.log(start);
    if (start <= 0) {
        clearInterval(intervalId);
        console.log("countdown finished");
    }
}
let startValue = 10;
//interval id sanding
//setinterval
const intervalId = setInterval(() => countdown(startValue--), 1000);