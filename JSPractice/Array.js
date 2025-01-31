let arr = []
for (i = 0; i < 10; i++) {
    let rdm = Math.floor(Math.random() * 100)
    arr.push(rdm)
}
console.log(arr)

let arr1 = [1,2,3,4,5,6,7,8,9]

const findFive=arr1.filter((e)=>{
  return e>7
}).every((e)=> {return 8<e})
console.log("Find : ",findFive)

function finddub(arr1) {
    let bgn =0;
    let arrlength = arr1.length;
    while (bgn <= arrlength) {
        for (let i = bgn+1; i < arrlength; i++) {
            if (arr1[bgn] === arr1[i]) {
                return true;
            }  
        }
        bgn++
    }
    return false;
}

function findFake(arr1){
    for(let i=0;i<arr1.length;i++){
        for(let j=i+1;j<arr1.length;j++){
            if(arr1[i]===arr1[j]){
                return "Duplicate"
            }
        }
    }
    return "No Duplicate"
}
console.log(finddub(arr1))
console.log("FindFake : ",findFake(arr1))

console.log("---array new---")

arr.map((e,i,a)=>{
    console.log("Elements :",e)
    console.log("Index : ",i)
    console.log("Array : ",a)
})