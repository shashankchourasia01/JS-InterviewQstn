// find odd even num without using % operator


function oddEven(n){
    if(Math.floor(n/2) * 2 === n){
        console.log("even");
    } else{
        console.log("odd");
        
    }
}
oddEven(7)

//using % operator

function oddEve(n){
    if(n % 2 === 0){
        console.log("even");
        
    } else{
        console.log("odd");
        
    }
}
oddEve(10)