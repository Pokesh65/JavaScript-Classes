// Day 2023-11-23 08-17-47

let arr1=[100,3,500,9,200,4,300,7,800,8];
let st="this is a javascript j";
console.log(Array.from(st.matchAll("j")))
console.log(Array.from(st.matchAll("j"))[1].input)


console.log("Accenting Order Start....")
// Accenting Order
arr1.sort(function(a,b){
    // 1.negative <0... a comes first
    // 2. 0... nothing will happen
    // 3.positive >0 b will comes first
    console.log("a value is :" ,a)
    console.log("b value is :" ,b)
    console.log("Returned value is :" ,a-b)

    return a-b
})
console.log(arr1)
// Dccenting Order

arr1.sort(function(a,b){
    // console.log(b-a)
    return b-a
})
console.log(arr1)