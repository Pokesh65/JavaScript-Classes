// 2023-11-27 08-13-10

let arr=[4,4,5,6,7,8,5,2,3,3]
let newset=new Set(arr) //a set can remove all dublicate values(number,string) and print original values only
// newset. you can use all map methods in set methods
console.log(newset)
console.log(Array.from(newset))//if you want to change the output from objact to array u need to use this array.from() method


// Date Methods
let today=new Date() //date this class used to print our current date and time
console.log(today)
console.log(today.getDay()) //we can get any date and time by using getter methods(get)     
today.setFullYear(2028,7,30) //we can set any date and time by using setter methods 
// and this moths also take index value if you want to print december use 11 instead of 12 
console.log(today)
today.setMonth(11) //if you want to print month 12 u need to use 11 to print 12
console.log(today)

// Class and Constructor
console.log("Class and Constructor Started")
class person{
    name="Morning"
    batch="8am"
    duration="4months"
    // the constructor has three rules 
    // 1,constructor must be inside the class
    // 2,only one constructor in one class
    // 3,and it's name only be an constructor no other names are allowed
    // the use of constructor when we call class 
    constructor(a){
        // this used for access the variables of class
        this.name=a  //we use this. because when we use name inside the class and outside the class as same name 
        // we need to use our class's name means you cloud use this. and then use the key whatever use used in inside the class


    }

}
let userClass=new person("Night") //this will get value of parantheses to constructor's a 
// the constructor will call when the see new person here
console.log(userClass.name)
console.log(userClass)

// exception handling methods
try{
    const n=5
    n=10
    console.log(n)

}catch(e){ //if any error occure this catch block will catch the error and print error type here 
    // u can also print the message here
    console.log(e+"const value can't be changes")
    // throw e 
    // throw methods even though u handled try,and catch when u use throw i will show the error
    // and throw will stop entier process after the throw 

}finally{
    console.log("i will print always")//it will print always 
}
 
 console.log("Hello const can't print")


//  round of the decimal values
let n=15.12345
console.log(n.toPrecision(6)) //it will print the value 
console.log(n.toFixed(2)) //it will print the value after the. use counts how many wwants to print
console.log(n.toString()+"Hello") //we can use this methods to convert number to string

// user defined function 
// you need to define function how they work
function addorsub(a,b){
    if(a=="add"){
        b=b+b
        a="correct"
    }else{
        b=b-b
        a="incorrect"
    }
    console.log(a+" "+b)
}
addorsub("add",10)
addorsub("sub",20)

// 2nd methods of printing user defined function
function suboradd(a,b){
    if(a=="add"){

        b=b+b

    }else{

        b=b-b

    }
    return b //
}
let subb=suboradd("add",50)
console.log(subb)


// self invoked function or immidiatly onvoked function
// you don't want to call this function anywhere
// it will call itself only once when programe is executed
// iife
let anonymous=(()=>{
    console.log("Hello Hiiii")
})()



// Arrow Function
// arrow it's comes in es6 upddate
let Arrowfun=()=>{
    console.log("hello welcome to arrow Function")
}
Arrowfun()


// Closures Function //Higher Order Function //CallBack Function
// a Function have another function inside their function is called callback,closure,higher order
// if any function has return u can't call it directly 
  function high1(){
    // console.log("welcome to parent function")
    return function(){
        console.log("this is callback Function")
    }
   

}
    // so now this function has return ,so we need to print that value means 
    // we should use that ()() to print function inside functions
    // if u want to call large function u can use() 
    // and if u want to print function inside functionu need to use ()() double empty paranthese
high1()
high1()()

// Hosting 
console.log(you)
// let you="yes i'm you " //this is hosting methods
// but if u put var instead of let u don't get error
// const and let won't allow u before the initialization
// but var can allow but it's shows undefined value
var you="yeah i'm you"
console.log(you)