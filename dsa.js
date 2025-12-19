// 1. max element in an arr

// function findMax (arr) {
//     if(arr.length === 0) {
//         return null
//     }

//     let maxVal = arr[0];

//     for( let num of arr) {
//         if (num > maxVal) {
//             maxVal = num;
//         }
//     }
//     return maxVal
// }

// console.log(findMax([2,5,7.1,9]));
// console.log(findMax([]));

// 2. Reverse an array in-place.
// To solve this, use two pointers: one starting at the beginning, the other at the end, and
// /swap until they meet in the middle.

// function revArr(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];

//     left++;
//     right--;
//   }
//   return arr;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(revArr(arr));

// 3. Check if a string is a palindrome.
// A palindrome reads the same forwards and backwards. To check this, use two pointers: one at the
//  start and one at the end of the string, moving towards the center while comparing characters.

// function isPalindrome (s) {
//     let left = 0
//     let right = s.length - 1

//     while (left < right) {
//         if (s[left] !== s[right]) return false;

//         left ++;
//         right --;
//     }
//     return true
// }

// console.log(isPalindrome("madam"))

// 4. Find the maximum sum of a contiguous subarray of size k using sliding window
// To solve this, use the sliding window technique: compute the sum of the first k elements,
// then slide the window one step at a time adding the new element and removing the
// outgoing element.

// function maxSumSubArr (arr,k) {

//     if (k <= 0 || k > arr.length) return null

//     windowSum = 0;
//     for ( let i = 0; i < k; i ++ ) windowSum += arr[i];

//     let maxSum = windowSum

//     for ( let i = k; i < arr.length; i++) {

//         windowSum += arr[i] - arr[i - k];

//         if (windowSum > maxSum) maxSum = windowSum
// }
// return maxSum;
// }

// const arr = [2,1,5,1,3,2];
// console.log(maxSumSubArr(arr,3));




// 5. Find the length of the longest substring without repeating characters.
// To solve this, use a sliding-window with a hashmap (char → last index) to move the window start when a duplicate appears.
