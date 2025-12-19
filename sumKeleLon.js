function sumK(arr,k){
    if( k <= 0 || k > arr.length) {
        return false
    }

    let winSum = 0;
    for ( let i = 0; i < k; i++){
        winSum += arr[i]
    }
    let maxVal = winSum
    for( let i = k; i < arr.length; i++){
        winSum = winSum + arr[i] - arr[ i - k]
        if(winSum > maxVal){
            maxVal = winSum
        }
    }
    return maxVal
}

const arr = [1,2,4,5,2,4]
console.log(sumK(arr,4));
