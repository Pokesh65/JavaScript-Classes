// let word= "{[()mnbns[]}"
// let map1= new Map()
// let count= 1
// for(let i=0; i<word.length; i++){
//     for(let j=0; j<word.length; j++){
//         if(i!=j){
//         if(word.charAt(i)==word.charAt(j)){
//             map1.set(word.charAt(i),++count)
//             console.log(map1)


//             }else{

//             }
//         }
//     }
//     map1.set(word.charAt(i), count)
//     count=1
// }
// if (map1.get("{") - map1.get("}") == 0){
//     console.log("Second:",map1)
// }
// console.log(map1)
console.log("Task Started:")

let arr=[7,2,3,5]

console.log("Al:"+arr.length)

let max = arr.length - 1

console.log("M :"+max)

for(let i=0;i < arr.length;i++){
    
    if(arr[i]>max){
    console.log("False")
    break;
    
    }else{
        max-= arr[i]
        // console.log(max) 
    } 
    if(max ==0 ){
        console.log("True")
        break;

    }  

}