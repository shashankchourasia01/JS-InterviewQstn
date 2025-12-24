function remove(s){
    let counter = 0;
    let result = "";
    for ( let i = 0; i < s.length; i++){
        const char = s[i]
        if(char === '('){
            if( counter > 0){
                result += char;
            }
            counter ++;
        }
        else if ( char === ')'){
            counter --
            if( counter > 0){
                result += char
            }
        }
    }
    return result
}
console.log(remove('(()())(()()())'));
