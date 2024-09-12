// Problem Solving

// Problem Solving data type String and array, objacts are rare

// Star pattern print

let star=""
for( i=0;i<3;i++){
    for(j=0;j<5;j++){
        if((i==0 && j<1)||(i==1 && j<3)||(i==2 && j<5)){
        star+="*"

        // }else if(i==1 && j<3) {
        // star+="*"

        // }else if(i==2 && j<5){
        // star+="*"

        }
        else{
            star +=""
        }
    }
star+="\n"
    
}
console.log(star)


// alternative methods of printing star

console.log("Without if Condition Star print...")
let result=""
let count=1

for( i=0;i<3;i++){
    for(j = 0; j < count; j++){
        result+="*"

    }
    result+="\n"
    count+=2
}
console.log(result)

// 2nd methods 
console.log("2nd Without if Condition Star print...")
let res=""


for( i=0,z=1;i<3;i++){
    for(j = 0; j < z; j++){
        res+="*"

    }
    res+="\n"
    z+=2
}
console.log(res)

console.log("Star need to be print 1,2,3,5,7")
let r=""
for( i=0,z=1;i<5;i++){
    for(j = 0; j < z; j++){
        r+="*"

    }

    r+="\n"
    if(i>1){
        z+=2

    }else{
    z+=1

    }
}
console.log(r)

// 2nd Problm For 

let hi="Hello Welcome You To Here"
let sTa=hi.split(" ")
console.log(sTa)
// console.log(sTa.length)
for(let word of sTa){
    // console.log(word.length, word)
    console.log()
    for(let letter of word){
        console.log(letter)
        if(letter=="H"){
            console.log(word+"--"+word.indexOf(letter))
            console.log(word)

            // if you want to break this condition use return instead of break
            // break; this break doesn't work on for loop
            // you can use Return Instead of break
            // return;
            break;
        }
    }
}

// 3rd Problem 
// let prime=11
// let isprime=true
// for(let i = 2; i < prime; i++){
//     if(prime%i==0){
//         isprime=false
//     console.log("This is not prime number",prime,i,isprime)

    
//     }
// }
// console.log(isprime)
// if(isprime){
//     console.log("This is Prime Number",isprime)
// }


let prime=11
let isprime=true
for(let i = 2; i < prime; i++){
    if(prime%i==0){
        isprime=false
    console.log("This is not prime number",prime,i,isprime)

    
    }else{
        console.log("This is Prime Number",isprime)
    }
    console.log(isprime)
}


