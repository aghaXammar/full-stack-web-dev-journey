

//setinterval

// console.log("starting the app");

// const interval = setTimeout(()=>{

//     console.log("one")

// },3000)

// console.log("still running...");



// Problem:
// Create a countdown from 10 to 0, printing a number every second.
// When it reaches 0, print "Time's up!" and stop.

// let count = 10;
// const countDown = setInterval(() => {

//     console.log(count--);
//     if(count < 0){
//         console.log("Time's up!");
//         clearInterval(countDown);
//     }
// },1000)



const localTime = setInterval(() => {

    console.log(new Date().toLocaleTimeString());
},1000)