// Iteration

let arr1=[3,4,5,6,7,8,10]

// Map
let foreEx=arr1.forEach((e,i,n)=>{ 
    // we can print each value in separate
    //u can add each value and console it in foreach 
    // foreach only used for iterate the value
    console.log(e+5)
    console.log("Index :",i)
    console.log("Number :",n)
    return e+5

})
console.log(foreEx)

// we can use map whenever we need to update each value of an array, and it's suits for string and numbers asloo
let MapEX=arr1.map((e)=>{  //map can create a new array based on the function but doesn't affect real one 
    return e+5

})
console.log(MapEX)
console.log(arr1)

let MapEX1=arr1.map((e,i)=>{  
    console.log("Array value : "+e) //this indicate the value of an array
    console.log("Index value : "+i) //and this one indicate the index value of array
    return e+=" Hello Pokes" //it will only take first declared return only
    return e+5

})
console.log("Map : ",MapEX1)

// map Example 2
console.log("Map example two Start")
// while using map it will go as nested array 
let flatex=arr1.map((e)=>{
    return[e*2,e*4]

})
console.log(flatex)

// flat map
console.log("FlatMap example Start")
// the flat map it will print every value in a single array format 
let flatamp=arr1.flatMap((e)=>{
    // it will multiple value from two different mutiplication
    return[e*2,e*4]

})
console.log(flatamp)


//Filter methods
console.log("Filter methods Starts")
let FilterEX1=arr1.filter((e,i)=>{   //filter can push the value to array which condition is satisfied(push element  to array only if its true )
    console.log("Filter value from arry",e) //this indicate the value of an array
    console.log("Filter value from arry's Index value",i) //and this one indicate the index value of array
   
    return e>5

})
console.log("Filter E>5 : ",FilterEX1)

// Find
let findex=arr1.find((e,i)=>{ //find will findout the condition is satisfied with the array value or not , if it's satisfied it will stop
    // in find and filter u can use only logical operators only
    console.log(e>5,"array",e,"index",i)
    return e>5
   

})
console.log("Find Methods : ",findex)

// some 
let someex=arr1.some((e,i)=>{
    // it will give true if any one of the array elements is satisfied the condtion, otherwise print false
    return e>5

})
console.log("Some Methods : ",someex)

// Every
let everyex=arr1.every((e,i)=>{
    // both some and every is to check the boolean value
    // it's stright opposite of some methods
    // it will give true if all of the array elements is satisfied the condtion, otherwise print false
    return e>5

})
console.log("Every Methods : ",everyex)

// some inside of the filter
let filterex2=arr1.filter((e,i)=>{
    return someex //it will show you all the value from someex
})
console.log("Some Inside",filterex2)

//Every inside of the Filter
let filterex3=arr1.filter((e,i)=>{
    return everyex //it will show nothing rather than empty []
})
console.log("Every inside",filterex3)

// Reduce methods
let reduceEx=arr1.reduce((e,i)=>{
    // u can reduce value by any operators +,-,*,/,%
    // in reduce methods e=0 value
    // and i= the first value of array(ex:3)
    // e+i == 0+3=3 now e takes the added value of e+i
    // e=3
    // now e=3,i=4 
    // e+i ==3+4=7
    // it will repeat this process until the i has anyother values to take from the array 
    // reduce is tottal value 
    // console.log(e,-i)
    return e+i
})
console.log("reduce : ",reduceEx)

// functions used by . beside string or array or boolean 
// but class is used by space(here this Map is a class)
// Map is a alternative way of creating Object 
let MapE= new Map()
MapE.set("name","Pokesh")
MapE.set("name1","Lokesh")
MapE.set("name2","Yokesh")
MapE.set("name3","Mukesh")
MapE.set("name4","Gnash")
MapE.set("name","Dinesh")
// in this map we can't simply use . to get value 
// here we have to use get methods to bring the value 
console.log(MapE)
console.log(MapE.get("name"))
console.log(MapE.get("name")=="Dinesh")

// add map value
MapE.set("name5","Malligaa")
console.log("Adding 5th Value : ",MapE)

console.log(MapE.get("name2"))
// console.log(MapE.clear)  //to clear the map object or empty the object
// MapE.clear()
console.log(MapE.has("name1")) //has can only check the key if it here or not(output will be true or false)
 
// Now we are going to check the values of the key by suing the advance for loop
// MapE.values is inbuild methods 
for(let obj of MapE.values()){
    if(obj == "Gnash"){
    console.log("advance For loop : ",obj)
    break
    }
    // console.log(obj)
}

// MapE.key is inbuild
// in big Map methods we can only access the key by using getmthods

for(let obj1 of MapE.keys()){
    // console.log(obj1)
    if(MapE.get(obj1) == "Mukesh"){
    console.log(obj1)
    console.log(MapE.get(obj1),obj1)
    break
    }
    // console.log(obj1)
}

// MapE.clear()
// console.log(MapE)

// deleting any one key from this object we can use delete methods
// using this object we can delete particular key wherelse in normal object we cant delete a particular key
MapE.delete("name1")
console.log(MapE)





