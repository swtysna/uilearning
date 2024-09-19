
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

// /**
//  * @author: Sonali
//  * @description: function to calculate sum of array numbers in an input array. This function will accept one arguement as an Array
//  * and will return updated input array
//  * 
//  * @param {Array} arr 
//  * @returns updated input array arr
//  */
// //1. write a function to calculate sum of array numbers in an array

function sumarr(arr) {
    // print which function calling, so that in console, you may identify this:
    console.log("sumarr function calling....");
    // declare a variable sum with the value as per the below
    let sum = 0;
    // for loop declare a variable i the value as per the below comparing the index value 0 to array length
    // let arr = [23, 34, 77, 99, 324];
    for (let i = 0; i < arr.length; i++) {

        // i = 0 ; 0 < 5
        sum = sum + arr[i]; // sum = sum + arr[i]
        // i = 0, sum = 0 + arr[0] = 0 + 23 = 23
        //i = 1, sum = 23 + arr[1] = 23 + 34 = 57
        //i = 2, sum = 57 + arr[2] = 57 + 77 = 134
        // i= 3, sum = 134 + arr[3] = 134 + 99 = 233
        // i = 4, sum = 233 + arr[4] = 233 + 324 = 557
        // i = 5, 5 < 5 false
    }
    // print the updated sum
    console.log(sum);
    //// return updated Array from this function
    return sum;

}

// declare a variable arr of type array as per the below
let arr = [23, 34, 77, 99, 324];
//
// arr function call with arguments of arr, save this function return value into a variable
// sumarr(arr);
let sum = sumarr(arr);
// 
console.log("sum of input array of arr is " + sum);



// // 2. search a number in an array.


function findaNum(arr, key) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            console.log("Search found");
            return true; // Return true when the key is found
        }
    }
    console.log("Search not found");
    return false; // Return false if the key is not found
}

let arr1 = [53, 76, 78, 34, 56];

findaNum(arr1, 99); // Output: Search not found
findaNum(arr1, 78); // Output: Search found
findaNum(arr1, 53); // output: search found


// let number = 25;
// let squareRoot = Math.sqrt(number);
// console.log(squareRoot); // Output: 5


let number = 144
let squareRoot = Math.sqrt(number);
console.log(squareRoot); // output :12
// 3. check input number is a prime number or not
function isPrime(num) {
    
    for (let i = 2; i <= Math.sqrt(num); i++) { // Check divisibility up to sqrt(num)
        if (num % i === 0) {
            console.log("This number is not a prime number " + num);
            return true; // If no divisors, it's prime
        }
       
    }
    
 
        console.log("This number is a prime number " + num);
    
    return false; // If divisible, it's not prime
}

   
  
    isPrime(50);
    isPrime(17);

    function isPrime(num) {
        if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log("This number is not a prime number " + num);
                return false; // If num is divisible by any number other than 1 and itself
            }
           
        }
        
            console.log("This number is a prime number " + num);
        return true; // If no divisors were found, num is a prime number
    }
  
    isPrime(41);
    isPrime(85);

// 4. check input string is palindrome or not?

function reverse(str) {
    console.log("input string = " + str);
    let string = "sonali";
    // variable holds reverse string
    let revstr = " ";
    for(let i = str.length - 1; i = i > 0; i--){
        revstr += str[i];
      
    }
      // return reverse string
    
}

console.log(revstr); // output : ilanos



/**
 * input string is sonali // i = last character will become as a first character // str.length = 6 // str[5] = str[str.length - 1] = i
 *              // l = second last character will become as a second character // str[4] = str[str.length - 2] = l
 * // str[3]= str[str.length - 3] = a
 * // 
 *  for(let i = 0; i < str.length; i++){
 * let index = str.length - (i+1); // i = 0 ; 6 - (0 + 1) = 6-1 = 5
 * i = 0; 5 - (0 + 1) = 5 - 1 = 4
 * i = 0; 4 - (0 + 1) = 4 - 1 = 3
 * i = 0; 3 - (0 + 1) = 3 - 1 = 2
 * i = 0; 2 - (0 + 1) = 2 - 1 = 1
 * i = 0; 1 - (0 + 1) = 1 - 1 = 1
 * 
 * console.log(str)
 * }
 * 
 */

function isPalindrome(str) {
    reverse_str = reverse(str);
    
    
    // same as string it is palindrome
    // else not a palindrome
    if (reverse_str === str) {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string is not palindrome");
    }

}

// isPalindrome("radar");

// isPalindrome("pop"); 

