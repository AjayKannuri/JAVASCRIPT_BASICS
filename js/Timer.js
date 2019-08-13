// const timer = ()=>{
//         setTimeout(()=>{
//                  console.log(`Executed after 2000 milliseconds`)
//         },2000);
// }


// timer();

// console.log(`this statement is executed before timer()`);



let handle;

const timering = (time)=>{
    handle = setInterval(()=> console.log(`Executed after ${time} milliseconds`),time*1000);
}

timering(1);
console.log(`this statement will not wait for the timer to be completed`);

setTimeout(()=> clearInterval(handle),10000);

