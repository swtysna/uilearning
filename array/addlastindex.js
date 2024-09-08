// Take 2 set of array array1 and array2. add first element of array1 and last value of array2.

// let arr1 = [51,78, 96, 23, 11, 56];

// let firstElem = arr1[0];

// console.log("== 1st element: " + firstElem);

// let arr2 = [22, 58,76, 36, 25, 65, 85];

// let lastIndex = arr2.length - 1 ;

// console.log("== last index of arr " + lastIndex);

// let lastElem = arr2[lastIndex];

// console.log("== last element " + lastElem);


// let sum = arr1[firstElem] + arr2[lastElem] ;


// console.log(" first element of arr1 " + firstElem + " last element of arr2 " + lastElem );

// function sumOfTwoArray (arr1, arr2) {
//     console.log("input first array " , arr1);
//     console.log("input second array", arr2);

//     let firstElem = arr1[0]


// console.log("== 1st element: " + firstElem);

// let lastIndex = arr2.length - 1 ;

// console.log("== last index of arr " + lastIndex);

// let lastElem = arr2[lastIndex];

// console.log("== last element " + lastElem);


// let sum = firstElem + lastElem ;


// console.log(" first element of arr1 is " + firstElem + " , last element of arr2 is " + lastElem + " and sum of these two elements are " + sum );

// }
// let a1 = [45,99,89,78];
// let a2 = [76, 88, 34,54,75];
// // sumOfTwoArray (a1,a2);

// let a4 = [34,45,99,89,78];
// let a5 = [76, 88, 34,54,75,90];
// sumOfTwoArray (a4,a5);

// insert a new no. into an array . array.push

/*
Q. insert a new no. into an array. 
step 1. start
step 2. create a function which will accept two arguements first will be array and second will be number
step 3. array will consists number, 
 
step 4. insert new element in array
step 5. push the array
step 6. end 
*/
// function arrpush(arr1,num){
//  console.log("input array " + arr1);
//  console.log("input number " + num);

 
// arr1.push(num);
// console.log(arr1);



// return ;
 
// }

// let a = [43, 24, 45, 67, 55, 21, 19, 99];
 


// arrpush(a,59);

// let arr2 = ["salad", "fruit", "juice", "nuts"];
 
// arrpush(arr2,"sweet");

// let arr3 = ["dog","cat","camel","lion"];

// arrpush(arr3,"snake");

//  converts an array to a string of (comma separated) array values.
/*
step:1 start
step:2 create a function
step:3 array will consist string
step:4 covert array to a string of (comma separated)
step:6 take variable 
step:7 print it
step:8 end
*/


// function arrpush(arr1,num) {
//         console.log("input array " + arr1);
//         console.log("input array " + num);


//  arr1.push(num);
//  console.log(arr1);

        
// }
// let arr1 = ["salad", "fruit", "juice", "nuts"];



// arrpush(arr1,"cat");


/*
step:1 start
step:2 create a function
step:3 array will consist string
step:4 covert array to a string of (comma separated)
step:6 take variable 
step:7 print it
step:8 end
*/

// function arrtostr(str) {
//     console.log("input array " + str);


// str.toString(str);
// console.log(str);
    
// }
// let str = ["salad", "fruit", "juice", "nuts"];

// let r = ["dog","cat","camel","lion"];

// arrtostr(r);



// function arrpop(arr) {
//     console.log("input array " + arr);
    


// arr.pop(arr);
// console.log(arr);

    
// }
// let arr = ["salad", "fruit", "juice", "nuts"];



// arrpop(arr);



// function arrshift(arr) {
//     console.log("input array " + arr);
    


// arr.shift(arr);
// console.log(arr);

    
// }
// let arr = ["salad", "fruit", "juice", "nuts"];



// arrshift(arr);

function arrunshift(arr,a) {
    console.log("input array " + arr);
    console.log("input array " + a);


arr.unshift(a);
console.log(arr);

    
}
let arr = ["salad", "fruit", "juice", "nuts"];



arrunshift(arr,"lemon");