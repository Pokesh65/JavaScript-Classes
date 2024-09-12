switch("saturday"){
    case "monday":
        console.log("Option monday is selected")
        break;
    case "sunday":
        console.log("Option Sunday Is Selected")
        break;
    case "wednesday":
        console.log("option Wednesday Is Selected")
        break;
    default:
        console.log("Invalid Day is Selected")
        break; 

}

console.log("Switch day is started")
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day)
    break;
  case 1:
    day = "Monday";
    console.log(day)

    break;
  case 2:
    day = "Tuesday";
    console.log(day)

    break;
  case 3:
    day = "Wednesday";
    console.log(day)

    break;
  case 4:
    day = "Thursday";
    console.log(day)

    break;
  case 5:
    day = "Friday";
    console.log(day)

    break;
  case  6:
    day = "Saturday";
    console.log(new Date().getDay())
    console.log(day)

}
console.log("Switch is ended")

let arr=[40,"Pokesh",30,"Dinesh",true,100,"malli",19,"deepi"]
arr[12] ="Kalaii"
console.log(arr)
// Advance For Loop
// for of used for to split the array into element
for(let dp of arr){  
    // console.log(dp)
    // when we use let element OF in for loop it will give element of that array 
    
    if(dp>=20){
    console.log("The element is matched :",dp)
    }else{
        console.log("value is not here :",dp)
    }
    
    
}

let dw=0;
console.log("Do Loop Started")
do{
    console.log("Do :",arr[dw])
    dw++

}while(dw>arr.length)
    console.log("while is running",arr[dw])

//Object Iteration Methods
let PObj={
    Name1 :"Malli",
    Agee1 :19,
    Gender1:"Female",
    Name  :"Pokesh",
    Agee  :22,
    Gender:"male"
    
}
console.log("For In Loop Started...")
for(let o in PObj){
    console.log(o,PObj[o])
}
    console.log("same data type and same value")
    console.log("24"===24) //to check data type and value is equal and string use ===

let strin="hello im a man ofu1 my o|o"

console.log(strin.length)
console.log(strin.toUpperCase())
console.log(strin.toLowerCase())
console.log(strin.includes("im")) //check whether the value is there or not
console.log(strin.charAt(9))
stringToArray=strin.split(" ")
console.log(stringToArray.length, stringToArray)


for(let t of stringToArray){
    console.log(t.length, t)
    console.log("Upper Case ",t.charAt(0).toUpperCase() + t.slice(1))
}
console.log("Slice :",strin.slice(4,10)) //cut value for where(4 index) to where(10 indexx)
console.log(strin.slice(-10,-1))
console.log(strin.substring(0,10)) //substring can't take negative values
console.log(strin.substring(-10,-5)) //substring can't change the original values
console.log("SubStr :",strin.substr(9,9)) //substr where to length of the letter to be print

let mali="Hi Malli"
console.log(mali.padStart(20,"Pok "))
console.log(mali.padEnd(16," june"))
let pokesh="   Hi Malli"
console.log(mali==pokesh)
console.log(pokesh.trim()==mali) //trim methods used for removing space 
let mp=pokesh.trim();
console.log(mali==mp)
console.log(mali.replace("Hi","Hello"))

//String search methods

console.log(mali.indexOf("l"))//finding letters index value by letter
console.log(mali.indexOf("l",6))//string value is the letter you need to find the value and number is how many letter u need to avoid in index value
console.log(mali.lastIndexOf("i"))
console.log(mali.lastIndexOf("i",1))//number is use to avoid the letters and the count of the number is used to avoid number counts




