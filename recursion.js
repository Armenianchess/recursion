/** product: calculate the product of an array of numbers. */

// take an arr = [1,2,3] create fn using recursion method
// print all the values 

// let arr = [1, 2, 3]
// let arr2 = []
// function printVal(arr) {
//   if (arr.length === 0) return;
//   console.log(arr[0])
//   arr2 = arr.slice(1)
//   return printVal(arr2)

// }
// console.log(printVal(arr))

// product([2, 3, 4])   // 24
// let result = 1;
// let numSlice;
// function product(nums) {
//   if (nums.length === 0) return 1;
//   numSlice = nums.slice(1)
//   console.log(numSlice)
//   return nums[0] * product(numSlice)

// }
// console.log(product([2, 3, 4]))









/** longest: return the length of the longest word in an array of words. */
// longest(["hello", "hi", "hola"])  // 5
// let words = ["hello", "hi", "hola"]
// let longestWordLength = 0
// function longest(words) {
//   if (words.length === 0) {
//     return longestWordLength
//   }


//   if (words[0].length > longestWordLength) {
//     longestWordLength = words[0].length
//   }
//   let wordSlice = words.slice(1)
//   return longest(wordSlice)

// }

// console.log(longest(words))

/** everyOther: return a string with every other letter. */
// everyOther("hello")  // "hlo"
// let str = 'hello'
// let returnStr = ''
// function everyOther(str) {

//   if (str.length === 0) {
//     return returnStr
//   }
//   if (str.length % 2 === 1) {
//     returnStr += str[0]
//     // hlo
//   }
//   let strSlice = str.slice(1)
//   return everyOther(strSlice)

// }
// console.log(everyOther(str))

/** isPalindrome: checks whether a string is a palindrome or not. */
// let str = 'racecar'
// function isPalindrome(str) {

//   if (str.length === 0) {
//     return true
//   }
//   if (str[0] !== str[str.length - 1]) {
//     return false
//   }

//   return isPalindrome(str.slice(1, -1))



// }

// console.log(isPalindrome(str))

/** findIndex: return the index of val in arr (or -1 if val is not present). */
// let arr = ["duck", "cat", "pony"]
// let val = 'pony'
// let arrCount = 0;
// function findIndex(arr, val) {

//   if (arr.length === 0) {
//     return - 1
//   }
//   if (arr[0] === val) {
//     return arrCount
//   }
//   arrCount++
//   return findIndex(arr.slice(1), val)

// }

// console.log(findIndex(arr, val))
// /** revString: return a copy of a string, but in reverse. */
// let str = "porcupine"
// let revStr = '';
// function revString(str) {

//   if (str.length == 0) return revStr

//   revStr += str[str.length - 1]

//   return revString(str.slice(0, -1))

// }

// console.log(revString(str))

/** gatherStrings: given an object, return an array of all of the string values. */
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};
let arr = []
function gatherStrings(nestedObj) {
  for (key in nestedObj) {
    if (typeof (nestedObj[key]) === 'string') {
      arr.push(nestedObj[key])

    } else if (typeof (nestedObj[key]) === 'object') {
      gatherStrings(nestedObj[key])
    }
  }
  return arr
}

console.log(gatherStrings(nestedObj))

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

// module.exports = {
//   product,
//   longest,
//   everyOther,
//   isPalindrome,
//   findIndex,
//   revString,
//   gatherStrings,
//   binarySearch
// };
