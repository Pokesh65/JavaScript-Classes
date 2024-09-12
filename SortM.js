// Day 2023-11-23 08-17-47

let arr1=[100,3,500,9,200,4,300,7,800,8];
let st="this is a javascript j";
console.log(Array.from(st.matchAll("j")))
console.log(Array.from(st.matchAll("j"))[1].index)

// Accenting Order
arr1.sort(function(a,b){
    return a-b
})
console.log(arr1)
// Dccenting Order

arr1.sort(function(a,b){
    return b-a
})
console.log(arr1)