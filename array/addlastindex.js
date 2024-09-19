// // Take 2 set of array array1 and array2. add first element of array1 and last value of array2.

// // let arr1 = [51,78, 96, 23, 11, 56];

// // let firstElem = arr1[0];

// // console.log("== 1st element: " + firstElem);

// // let arr2 = [22, 58,76, 36, 25, 65, 85];

// // let lastIndex = arr2.length - 1 ;

// // console.log("== last index of arr " + lastIndex);

// // let lastElem = arr2[lastIndex];

// // console.log("== last element " + lastElem);


// // let sum = arr1[firstElem] + arr2[lastElem] ;


// // console.log(" first element of arr1 " + firstElem + " last element of arr2 " + lastElem );

// // function sumOfTwoArray (arr1, arr2) {
// //     console.log("input first array " , arr1);
// //     console.log("input second array", arr2);

// //     let firstElem = arr1[0]


// // console.log("== 1st element: " + firstElem);

// // let lastIndex = arr2.length - 1 ;

// // console.log("== last index of arr " + lastIndex);

// // let lastElem = arr2[lastIndex];

// // console.log("== last element " + lastElem);


// // let sum = firstElem + lastElem ;


// // console.log(" first element of arr1 is " + firstElem + " , last element of arr2 is " + lastElem + " and sum of these two elements are " + sum );

// // }
// // let a1 = [45,99,89,78];
// // let a2 = [76, 88, 34,54,75];
// // // sumOfTwoArray (a1,a2);

// // let a4 = [34,45,99,89,78];
// // let a5 = [76, 88, 34,54,75,90];
// // sumOfTwoArray (a4,a5);

// // insert a new no. into an array . array.push

// /*
// Q. insert a new no. into an array. 
// step 1. start
// step 2. create a function which will accept two arguements first will be array and second will be number
// step 3. array will consists number, 
 
// step 4. insert new element in array
// step 5. push the array
// step 6. end 
// */
// // function arrpush(arr1,num){
// //  console.log("input array " + arr1);
// //  console.log("input number " + num);

 
// // arr1.push(num);
// // console.log(arr1);



// // return ;
 
// // }

// // let a = [43, 24, 45, 67, 55, 21, 19, 99];
 


// // arrpush(a,59);

// // let arr2 = ["salad", "fruit", "juice", "nuts"];
 
// // arrpush(arr2,"sweet");

// // let arr3 = ["dog","cat","camel","lion"];

// // arrpush(arr3,"snake");



// // function arrpush(arr1,num) {
// //         console.log("input array " + arr1);
// //         console.log("input array " + num);

// // Q 1.
// //  arr1.push(num);
// //  console.log(arr1);

        
// // }
// // let arr1 = ["salad", "fruit", "juice", "nuts"];



// // arrpush(arr1,"cat");




// // Q  2.converts an array to a string of (comma separated) array values.
// /*step:1 start
// step:2 create a function which will accept an arguement of array type
// step:3 array will consist string
// step:4 covert array to a string of (comma separated)
// step:6 take variable 
// step:7 call function
// step:8 end
// */


// function arrtostr(arr) {
//     console.log("calling this function arrtostr");
//     console.log("input array ", arr);


// str.toString(arr);
// console.log(arr);

    
// }
// let str = ["salad", "fruit", "juice", "nuts"];

// let r = ["dog","cat","camel","lion"];

// arrtostr(r); // dog, cat, camel, lion

// /*
//  * @author: Sonali
//  * @description: function to test array shift on an input array. This function will accept one argument as an Array 
//  * and will return updated input array
//  * @param {Array} arr 
//  * @returns updated input array
//  */

// /**
//  * @author: Sonali
//  * @description: function to test array shift on an input array. This function will accept one arguement as an Array
//  * and will return updated input array
//  * 
//  * @param {Array} arr 
//  * @returns updated input array arr
//  */
// function arrshift(arr) {
//     // print which function calling, so that in console, you may identify this:
//     console.log("arrshift function calling....");

//     // print arguments, in their format as input argument is an Array. We may use comma to just print the variable value.
//     console.log("input array", arr);
    
//     // use Array shift method / liabrary function, to remove element from the 0th index of input Array
//     arr.shift(arr);

//     // print the updated array
//     console.log("Updated Array: ", arr);
    
//     // return updated Array from this function
//     return arr;
// }

// // declare a variable arr1 of type array with String values as per the below
// let arr8 = ["salad", "fruit", "juice", "nuts"];

// // arrshift function call with arguments of arr1, save this function return value into a variable
// let updatedArr = arrshift(arr8);

// console.log("Updated Array after using arrshift function: ", updatedArr);

// // /*Q 3. insert a new array into an array. array.pop
// step 1. start
// step 2. create a function with one arguements
// step 3. took a variable put elements
// step 4. pop the array
// step 5. print the array
// step 7. call function and watch the result
// step 8. end
// */
// // /**
//  * @author: sonali
//  * @description: function to test array to pop an element in an array.
//  * 
//  * @param {Array} arr
//  */

// function arrpop(arr) {
//     console.log("input array " + arr);
    


// arr.pop(arr);
// console.log(arr);

// return ;

    
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

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";


// function arrat(arr) {
//        console.log("input array ", arr);
        
    
    
//       let i = arr.at(2); //
//      console.log(i);
    
//         let j = arr1[2];
//         console.log(j);
//     }
//      let arr = ["salad", "fruit", "juice", "nuts"];
    
//      let arr1 = ["dog", "cat", "deer", "lion"];
    
    
    
//     //  arrat(arr);
    
//     //1. input array of size 3 find largest no.[45, 89, 23];
//     //2. input array of size 4 find smallest no.[12, 223, 85, 99];


/**
 * @author: Sonali
 * @description: function to test array of size 3 find largest no. in an input array. This function will accept one argument as an Array 
 * and will return updated input array.
 * @param {Array} arr
 * @returns updated input array arr
 */
// Algorithm
// Step 1: As our task is to find the largest values from the given input array without sorting the array. 
// So we will define a function called largestElement and in this function we will pass a parameter array.

// Step 2: So we have already created the function and the input array.

// Step 3: After the above conditions we will declare two variables to store the values of largest numbers from the array. 
// And give them name largestNUM. Initialize these variables with the first item of the array.

// Step 4: Now we will use a loop to iterate the numbers of the array and check the conditions if the current item is larger than 

// array length then we will update the value of smallest to the current item.

// Step 5:  we will check the condition for the greatest number. If the current item is largest then
//  we will update the value of largest with the current item.

// Step 6: At the end we will have the smallest and largest numbers of the array so return these values.
 
//1. input array of size 3 find largest no.[45, 89, 23];



// function largestElement(arr) {
//     let largestNum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largestNum) {
//             largestNum = arr[i];
//         }
//     }
//     return largestNum;
// }

// let num1 = [10, 15, 18];
// let result = largestElement(num1);

// console.log("The largest element in the array is:" + result); 


  //2. input array of size 4 find smallest no.[12, 223, 85, 99];
    
/**
 * @author: Sonali
 * @description: function to test array of size 3 find largest no. in an input array. This function will accept one argument as an Array 
 * and will return updated input array.
 * @param {Array} arr
 * @returns updated input array arr
 */
  /*
  Algorithm
Step 1: As our task is to find the smallest values from the given input array .
 So we will define a function called smallestElement and in this function we will pass a parameter array.

Step 2: So we have already created the function and the input array.
 

Step 3: After the above conditions we will declare one variables to store the values of smallest numbers
 from the array. And give them names as smallestNum. Initialize these variables with the first item of the array.

Step 4: Now we will use a loop to iterate the numbers of the array and 
check the conditions if the current item is smallest number then we will update the value of smallest to the current item.


Step 5: At the end we will have the smallest numbers of the array so return these values.
*/

//   function smallestElement(arr) {
//     let smallestNum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] < smallestNum) {
//             smallestNum = arr[i];
//         }
//         return smallestNum;
//     }
//   }
//   let num2 = [20, 45, 10, 56];
//   let res = smallestElement(num2);

//   console.log("The smallest element in the array is:" + res );



//  for loop if you want to run the same code over and over again, each time with a different value.
    
/**
 * @author: Sonali
 * @description: function to test array of size 3 find largest no. in an input array. This function will accept one argument as an Array 
 * and will return updated input array.
 * @param {Array} arr
 * @returns updated input array arr
 */
  /*
  Algorithm
Step 1: As our task is to do a coloumn array convert into an row array with seperated comma .
 So we will  in this function we will pass a parameter array.

Step 2: So we have already created the function function name is repeat and input array is arr.
 

Step 3: after the above condition sets a variable before the loop starts (let i = 0).

step 4 : defines the condition for the loop to run arr length.

step 5: increases a value (i++) each time the code block in the loop has been executed.

step 6: print the array.

step 7: return the input array.

step 8: took a variale put an array into it.

step 9: call the function


// */
// function repeat(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//         console.log("The for loop is     " + arr[i]);

//         }
           
      
//       return arr;
// }

// let arr1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let arr2 = ["sweety", "sonu", "sargun", "guddan",];
//    repeat(arr1);
//    repeat(arr2);

  
  
// //   2. loop for
//    function lFor(num) {
    
//     for (let i = 0; i < 5; i++) {
//         console.log("The for loop is     " +[i]);

//         }
           
      
//       return lFor;
// }
// let num = ""
// lFor(num);




//  * @author: Sonali
//  * @description: function to test array shift on an input array. This function will accept one arguement as an Array
//  * and will return updated input array
//  * 
//  * @param {Array} arr 
//  * @returns updated input array arr
//  */
// function arrshift(arr) {
//     // print which function calling, so that in console, you may identify this:
//     console.log("arrshift function calling....");

//     // print arguments, in their format as input argument is an Array. We may use comma to just print the variable value.
//     console.log("input array", arr);
    
//     // use Array shift method / liabrary function, to remove element from the 0th index of input Array
//     arr.shift(arr);

//     // print the updated array
//     console.log("Updated Array: ", arr);
    
//     // return updated Array from this function
//     return arr;
// }

// // declare a variable arr1 of type array with String values as per the below
// let arr8 = ["salad", "fruit", "juice", "nuts"];

// // arrshift function call with arguments of arr1, save this function return value into a variable
// let updatedArr = arrshift(arr8);

// console.log("Updated Array after using arrshift function: ", updatedArr);
// /**
//  * @author: Sonali
//  * @description: function to calculate sum of array numbers in an input array. This function will accept one arguement as an Array
//  * and will return updated input array
//  * 
//  * @param {Array} arr 
//  * @returns updated input array arr
//  */
// //1. write a function to calculate sum of array numbers in an array

// function sumarr(arr) {
//     // print which function calling, so that in console, you may identify this:
//     console.log("sumarr function calling....");
//     // declare a variable sum with the value as per the below
// let sum = 0;
// // for loop declare a variable i the value as per the below comparing the index value 0 to array length

// for (let i = 0; i < arr.length; i++) {

//   sum += arr[i];
// }
// // print the updated sum
// console.log(sum);
// //// return updated Array from this function
// return arr;

// }

// // declare a variable arr of type array as per the below
// let arr = [23, 34, 77, 99, 324];
// //
// // arr function call with arguments of arr, save this function return value into a variable
// sumarr(arr);

// // 2. search a number in an array.

// function findaNum(arr) {
//     let find = 12;
    

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] == find) {
//              find = true;
//         }
//     }
    
// if (find) {
//     console.log("The element was find in the array.");
// } else {
//     console.log("The element was not found in the array.");
   
// }
// console.log(find);
// return arr;
// }
// let arr1 = [55, 14, 74, 23, 12, 78, 25];

// findaNum(arr1); 


