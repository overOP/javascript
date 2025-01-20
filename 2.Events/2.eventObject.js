//it is a special object that has details about the event.
//All event handlers have access to the Event Object's propertirs and methods.

    //Node.event = (e) => {
        //handle here
    //}

    //e.target, e.type, e.clientX, e.clientY


    let btn2 = document.querySelector("#btn2");
    btn2.onclick = (e) => {
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.clientX, e.clientY);
    }