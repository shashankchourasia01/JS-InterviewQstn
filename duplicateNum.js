// Duplicate number in a array

function duplicte(arr){
    let seen = new Set();

    for(let num of arr){
        if(seen.has(num)){
            return num
        }
        seen.add(num)
    }
}

console.log(duplicte([1,2,3,3]))