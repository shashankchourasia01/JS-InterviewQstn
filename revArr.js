// reverse an array at same point

function revArr(arr){
    let left = 0;
    let right = arr.length - 1;

    while( left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left ++;
        right --;

    }
    return arr
}
const arr = [1,2,3,4]
console.log(revArr(arr));
