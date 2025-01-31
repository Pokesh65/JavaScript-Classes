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
    console.log(dp)
    // when we use let element OF in for loop it will give element of that array 
    if(dp>=20){
    console.log("This is matched Numbers:",dp)
    }else{
        console.log("This is matched Strings:",dp)
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
// JavaScript for in statement loops through the properties of an Object: Syntax. for (key in object)
for(let o in PObj){
    console.log(o,"==",PObj[o])
}

console.log("same data type and same value")
console.log("First Data Type","24"===24) //to check data type and value is equal and string use ===
console.log("Second Data Type",24===24)

let strin="Hello iM a Man Ofu1 my o|o"

console.log("Checking the length :",strin.length)
console.log("Checking the toUpperCase :",strin.toUpperCase())
console.log("Checking the toLowerCase :",strin.toLowerCase())
console.log("Checking the Includes :",strin.includes("iM")) //check whether the value is there or not
console.log(strin.charAt(strin.length-1))

// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.
stringToArray=strin.split(" ")
console.log(stringToArray.length, stringToArray)


for(let t of stringToArray){
    // console.log(t.length, t)
    console.log("Upper Case ",t.charAt(0).toUpperCase() + t.slice(1))
}
console.log("Slice :",strin.slice(4,10)) //cut value for where(4 index) to where(10 indexx)
console.log(strin.slice(-10,-1))

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.
// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
console.log("SubString :",strin.substring(0,10)) //substring can't take negative values
console.log("SubString :",strin.substring(-10,-5)) //substring can't change the original values

// The substr() method begins at a specified position, and returns a specified number of characters.
console.log("SubStr :",strin.substr(9,9)) //substr where to length of the letter to be print

let mali="Hi Malli"
// The padStart() method pads a string with another string (multiple times) until it reaches a given length.
console.log(mali.padStart(20,"Pok "))
// The padEnd() method pads a string with another string (multiple times) until it reaches a given length.
console.log(mali.padEnd(50," june"))

let pokesh="   Hi Malli"
console.log(mali==pokesh)
console.log(pokesh.trim()==mali) //trim methods used for removing empty space 
let mp=pokesh.trim();
console.log(mali==mp)
console.log(mali.replace("l","L"))

//String search methods
let malliii="Welcome De Deepika"
console.log(malliii.indexOf("e"))//finding letters index value by letter
console.log(malliii.indexOf("e",13))//string value is the letter you need to find the value and number is how many letter u need to avoid in index value
console.log(malliii.lastIndexOf("e"))
console.log(malliii.lastIndexOf("e",2))//number is use to avoid the letters and the count of the number is used to avoid number counts



