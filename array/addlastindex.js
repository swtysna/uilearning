// Take 2 set of array array1 and array2. add first element some of array1 and last value of some of array2.

let arr1 = [51,78, 96, 23, 11, 56];

let firstElem = arr1[0];

console.log("== 1st element: " + firstElem);

let arr2 = [22, 58,76, 36, 25, 65, 85];

let lastIndex = arr2.length - 1 ;

console.log("== last index of arr " + lastIndex);

let lastElem = arr2[lastIndex];

console.log("== last element " + lastElem);


let sum = arr1[firstElem] + arr2[lastElem] ;


console.log(" first element of arr1 " + firstElem + " last element of arr2 " + lastElem );


