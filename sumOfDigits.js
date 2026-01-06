function sumDigits(num){
    let sum = 0;
    while( num > 0){
        let digits = num % 10;
        sum = sum + digits;
        num = Math.floor( num / 10)
    }
    return num
}

console.log(sumDigits(1234));
