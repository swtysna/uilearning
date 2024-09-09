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



// function arrpush(arr1,num) {
//         console.log("input array " + arr1);
//         console.log("input array " + num);

// Q 1.
//  arr1.push(num);
//  console.log(arr1);

        
// }
// let arr1 = ["salad", "fruit", "juice", "nuts"];



// arrpush(arr1,"cat");




// Q  2.converts an array to a string of (comma separated) array values.
/*step:1 start
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

/*Q 3. insert a new array into an array. array.pop
step 1. start
step 2. create a function with one arguements
step 3. took a variable put elements
step 4. pop the array
step 5. print the array
step 7. call function and watch the result
step 8. end
*/

// function arrpop(arr) {
//     console.log("input array " + arr);
    


// arr.pop(arr);
// console.log(arr);

    
// }
// let arr = ["salad", "fruit", "juice", "nuts"];



// arrpop(arr);


/*
Q 4.shift an element from an array. use arr.shift
step 1. start
step 2. create a function with one arguements
step 3. use function name with shift like arr.shift
step 4. shift the array
step 5. print the array
step 7. call function and watch the result array will shift from the left side
step 8. end
*/



// function arrshift(arr) {
//     console.log("input array " + arr);
    


// arr.shift(arr);
// console.log(arr);

    
// }
// let arr = ["salad", "fruit", "juice", "nuts"];



// arrshift(arr);

/*
Q 5.unshift an element from an array. use arr.unshift
step 1. start
step 2. create a function with one arguements
step 3. use function name with unshift like arr.shift
step 4. unshift the array
step 5. print the array
step 7. call function and watch the result array will unshift (add) from the left side
step 8. end
*/

// function arrunshift(arr,a) {
//     console.log("input array " + arr);
//     console.log("input array " + a);


// arr.unshift(a);
// console.log(arr);

    
// }
// let arr = ["salad", "fruit", "juice", "nuts"];

// arrunshift(arr,"lemon");


/* 
Q 6. concat two arrays
step 1. start
step 2. create a function which will accept two arguements both will be array
step 3. arrays will consists number or string  , 
step 4. took one variable to concact two rays // rrr = arr.concat(brr) // arr is first array // brr is second array
step 5. print the array // rrr
step 6. call function and check the result two array will add from the right side
step 7: end
*/


// function arrconcat(arr,brr) {
//     console.log("input array " + arr);
//     console.log("input array " + brr);


// let rrr = arr.concat(brr);
// console.log(rrr);

    
// }
// let arr = ["salad", "fruit", "juice", "nuts"];

// let brr = ["burger", "pizza"]

// arrconcat(arr,brr);

/*
Q 7.copy array
step 1. start
step 2. create a function which will accept one arguements
step 3. arrays will consists number or string  , print it
step 4. use arr.copywithin(2,0)
step 5. print it
step 6. call function and check which element have  index no. 1 it will be deleted from the array. leaves undefined holes in the array
step 7: end
*/


// function arrcopy(arr) {
//     console.log("input array " + arr);
    


//  arr.copyWithin(2,0);
// console.log(arr);

    
// }
// let arr = ["salad", "fruit", "juice", "nuts"];



// arrcopy(arr);

// loop

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


