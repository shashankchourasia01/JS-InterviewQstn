// reverse a string

function revStr(s){
    let left = 0;
    let right = s.length - 1;

    while( left < right){
        if( s[left] !== s[right]) {
            return false
        } else {
            return true
        }
    }
}

console.log(revStr('madamjd'));
