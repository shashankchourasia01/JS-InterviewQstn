function secLar(arr){
    lar = -Infinity;
    sec = -Infinity
     for( let num of arr){
        if( num > lar){
            sec = lar;
            lar = num
        } else if( num > sec && num !== lar){
            sec = num
        }
     }
     return sec
}

console.log(secLar([1,2,3,5,6,3]));
