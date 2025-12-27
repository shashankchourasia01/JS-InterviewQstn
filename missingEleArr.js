function missing(arr){
    const n = arr.length + 1;

    const expSum = (n * (n + 1)) /2;

    let actSum = 0;
    for ( let i = 0; i < arr.length; i++){
        actSum += arr[i];
    }
    return expSum - actSum;
}

console.log(missing([1,2,3,4,6])); 
