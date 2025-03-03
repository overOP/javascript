//var, let, const is used for variable
//variable is used to store the data
//TYPES OF VARIABLE IN JS is local and global

//local variable is used inside the function
//function scope is used for local variable
//block scope is used for local variable

//global variable is used outside the function
//primitive data types 

    //if we want to know the type of variable we use {typeof (  ) }keyword
          //undefined              // type of undefined is undefined ( only in let and var)  
          let a;
          console.log(a); 

          //null                  // type of null is object // in es5 it is used 
          let b = null;
          console.log(b);

          //boolean               // type is true or false
          let c = true;
          console.log(c);

          //number                // type is number
          let d = 10;
          console.log(d);

          //string                 // type is string (" ")
          let e = "hello";
          console.log(e);

          //bigint                // type is bigint  big integer or number
          let f = 100n;
          console.log(f);

          //symbol                // type is symbol ()
          let g = Symbol();
          console.log(g);

//non-primitive data types

           //object                 // object is  {key:value}
           let h = {
            //key:"value",
            name:"over",
            age:20,
            gender:"male"
        };
           console.log(h);

           //array                  // array is in []  //list holds   
           let i = [1,2,3,4,5];
           console.log(i);

           //function               // function is ()  //function holds
           function helloworld(){
            let j = 10;
            console.log(j);
           }
           helloworld();
          

           //date                   // date is new Date()  //date holds
           let k = new Date();
           console.log(k);

        // logical operator 
        // in AND &&
           let A = 10;
           let B = 20;
           let C = A && B;
           console.log(C);

        // in OR we use  ||   
           let D = 10;
           let E = 50;
           let F = D || E;
           console.log(F);


           //   \n is used for new line
           // \t is used for tab