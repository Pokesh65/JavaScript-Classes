// 2023-11-28 08-08-29
"use strict" //this "use strict" will check every condition on this programming page where you use strict methods
// poke="Welcome You"  //when using use strict methods this will throw error
let dinesh="Good Morning"
console.log(dinesh)

// string template
// the string templates is using a variable inside the another variable
// we will use this in react,and where we connect front-end and back-end
let lettter="Before"
let word=`Meditate ${lettter} start your work` //this is string template methods
console.log(word)

// promise
// advance methods of error handling
let np=10
let NewProm=new Promise((resolve, reject) => {
    if(np==0){
        resolve("This is correcct")

    }else
    reject("Error In this process")
    
})

// sync function mean if one program is running while running that one program it will go to another program
// it will run in two threads, it will mostly used for a gaming example(pubg) the same program can run in multiple devices

// async mean if any above code is showing error then it will not go to another line it will run in one thread
// the below .then is also used to handle the async function
// and this async await if a advance methods of the .then methods

// ES6
// if u want to handle the error methods in async await you have to use try catch methods 

async function resu(){
    try{
        // u can use await when u use async only
        // await means wait untill that process is completed
    let res1=await NewProm // await should only used for which process u think i will take time then u can use await 
    console.log(res1)

    }catch(error){
        console.log(error) //it will print the type of the error that's in promise methods 

    }
    
}
resu()


// let result=NewProm.then((yes)=>{  //this .then wait for all the above code to run fully then this will work
//     console.log(yes)
    
// }).catch((err)=>{  //we should definitly handle the reject method with .catch to print error
//     console.log(err) //we can declare any variable,but this variable have the value of reject's
// })

// type conversion we can't convert a string to number ,and array to number
// using parseInt we can change string to number
console.log(parseInt("10")+5)

// type of operator is used to tell which data type is nearby that typeof 
// there are two data type primitive(only one value in a variable) non-primitive(more than one value in a variable(array,object))
console.log(typeof "hello")
console.log(typeof(typeof undefined))

// IsNAN not a number
console.log(isNaN(10))
console.log(isNaN("wow"))
console.log(isNaN(true)) //true boolean value is 1 false boolean value is 0, so it will consider true or false as number  


// A3B4C2
// AAABBBBCC
if(!isNaN){
    letter+=letter.repeat(parseInt())
}

// SetTimeOut this is used to show the add in a website after a certain time period
setTimeout(() => {
    console.log("Here Is Advertisment")
}, 3000);//here is u need to give time of delay,but it will not repeat

setInterval(()=>{
    console.log("Im Break")
},4000) // this will repeat every 4s(u can set time) // to close this process use ctrl+c

// conver railway time to normal time
// 2if methods,1 for loop,1 split methods
// result+="12"+":"+arr[1]

// 15:15:00

let hours="22:40:25"
console.log("The Given 24Hours Time : "+hours)
let hourscon=hours.split(":")
hourscon[0]=hourscon[0] % 12
console.log("The Converted Time : "+hourscon.join(":"))
