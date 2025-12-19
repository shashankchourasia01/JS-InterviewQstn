function larEle(arr) {
  if (arr.lengt === 0) {
    return false;
  }
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
        max = num
    }
  }
  return max
}
console.log(larEle([1,4,6,8]));

