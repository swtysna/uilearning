// take a array of 10 random numbers/ integers

let arr = [34, 5, 98, 111, 3, 64, 65, 8, 0, 73]; // arr[0] // length = 10

// print 5th element of this array

let fifthElem = arr[4];

console.log("== fifth element: " + fifthElem);

// print 1st and last element

let firstElem = arr[0];
console.log("== first elemenet/ value: "+ firstElem);

let lastIndex = arr.length - 1; // 9

console.log("last index of arr: "+ lastIndex); // 9

let lastElem = arr[lastIndex]; // arr[9] // 73

console.log("== last element/ value: " + lastElem);

// check if this array last element is odd or even?

if (lastElem % 2 == 0) {
  console.log("Last element " + lastElem + " is Even");
} 
else {
  console.log("Last element " + lastElem + " is Odd");
}

//Create a function, which will accept a array of random integers and check first and last element is an odd or even number and print accordingly.

function checkArrayElement(numArr){
  console.log("input number " + numArr); // [.. ,.., so on]
  
  let firstElem = numArr[0];// first element will be in 0 index
  
  let lastIndex = numArr.length - 1; // to find last index no.
  
  let lastEle = numArr[lastIndex];
  
  console.log("== first element " + firstElem);
  
  console.log("== last element " + lastEle);
  
  if (firstElem % 2 === 0) {
    console.log("first element " + firstElem + " is even");
    }
    else {
      console.log("last element " + lastEle + " is odd");
    }
  
  if (lastEle % 2 !== 0) {
    console.log("last element " + lastEle + " is odd");
    }
    else {
      console.log("last element " + lastEle + " is even");
    }
    /* 
    length of array / 2
    5 / 2 = 2.5
    Math.floor(2.5) = 2
    length of array 6 
    6 /2 = 3
    Math.floor(3) = 3
    array [23, 45, 56, 77, 88, 22]
    
    mid index = 2nd , 3rd // 56 77
    */
  let midIndex = Math.floor(numArr.length / 2);
  console.log(midIndex);
  
  let midNum = numArr[midIndex];
  console.log("== midNum " + midNum);
   
  /*
  if array.length is even will be 2 mid nos. mid inex & mid index -1
  odd 
  
  */
  
                  
  
}

let arr3 = [10,98,76,55, 89, 34, 77];

checkArrayElement(arr3);

// find mid no. of an input array.


let y = Math.ceil(2.5);

/* 

*/
// 1 mid no. nikalana hai input array ka create a function find a mid no. of an input array
/*   odd hoga to 1 hoga 
79line no.*/









