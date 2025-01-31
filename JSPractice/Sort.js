

let arr=[2,3,4,5,2,39,40,56,30]

// console.log(arr)

// arr.sort(function(a,b){

//     console.log("First value :",a)
//     console.log("Second Value:",b)
//     console.log("value:",a-b)
//     return a-b

// })

// console.log(arr)

function NormalSorting(arr2){

    

    for(i=0;i<arr2.length-1;i++){

        for(j=0;j<arr2.length-1;j++){

            if(arr2[j+1]<arr2[j]){
                let temp=arr2[j+1];
            arr2[j+1]=arr2[j]
            arr2[j]=temp;
               
            }
            
        }

    }
    console.log(arr2)

}

let arr2=[2,3,4,5,2,39,40,56,30]
NormalSorting(arr2)
                      
let arrs=[10,8,1,5,10,7,19,30,11]

let as=arrs.sort((a,b)=>a-b)
console.log(as)