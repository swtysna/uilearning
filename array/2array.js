// Take a array of  12 random numbers / integers

let arr = [12, 18, 67, 89, 90, 45, 56, 78, 38, 79, 55, 62]; // arr[0] // length = 12

// print 11th element of this array

let eleventhElem = arr[10];
console.log("== 11th element: " + eleventhElem);

let firstElem = arr[0];
console.log("== 1st element: " + firstElem);

let fourthElem = arr[3];
console.log("== 4th element: " + fourthElem);

let lastIndex = arr.length - 1;// 11
console.log("last Index of arr " + lastIndex); // 11

let lastElem = arr[lastIndex]; // arr[11] // 62
console.log("== last element " + lastElem);

// check if this array fourth element is odd or even

function checkEvenAndOddArray(intArr) {
    console.log("input number " + intArr );

    let firstElem = intArr[0];// first element will be in 0 index
  
    let fourthElem = intArr[3];// 

  let lastIndex = intArr.length - 1; // to find last index no.
  
  let lastEle = intArr[lastIndex];
  console.log("== first element " + firstElem);
  
  console.log("== last element " + lastEle);
  

    if(fourthElem % 2 === 0) {
        console.log("fourth Element " + fourthElem + " is even");
    }
    else {
        console.log("fourth Element " + fourthElem + " is odd");
    }
    if(lastElem % 2 !== 0) {
        console.log("last Element " + lastElem + " is odd");  
    }
    else {
        console.log("last Element " + lastElem + " is even");
    }


}

checkEvenAndOddArray(arr);

