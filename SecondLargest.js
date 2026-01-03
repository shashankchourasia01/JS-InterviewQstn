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

console.log(secLar([2,5,1,7,8,2]));
