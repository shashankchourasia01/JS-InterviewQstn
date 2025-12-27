function remDup(arr){
    if(arr.length === 0) return false;

    let i = 0;
    for( let j = 1; j < arr.length; j++){
        if( arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(remDup([1,1,2,2,3,4,4,5]));