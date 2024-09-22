
/**
 * utility function related to loop
 * 
 */


/**
 *1. write a function to print even no. between 1 to 100.
 * start range = 1 ; End range = 100;
 */
function printEvenNums() {
    // i = 1; 1 <= 100; true
    // i = 2; 2 <= 100; true
    // i = 3; 3 <= 100; true; for loop ke under jaayega.
    // i = .......... 98 ; same 
    // i = 99; 99 <= 100; true 
    // i = 100; 100 <= 100; true
    // i = 101; 101 <= 100; false
    for (let i = 1; i <= 100; i++) {
        // 1 % 2 === 0; false
        // 2 % 2 === 0; true
        // 3 % 2 === 0; false
        // 99 % 2 === 0; false
        // 100 % 2 === 0; true
        if (i % 2 === 0) {
            console.log("Even number is " + i);
        }
        // i++ ; i = 1 + 1 = 2;
        // i++; i = 2 + 1 = 3;
        // i++...... 98
        // i++; i = 99; i = 99 + 1 = 100;
        // i++; i = 100; i = 100 + 1= 101;
    }
}
// print even number
// calling this function..
// printEvenNums();


/**
 *1. write a function to print even no. between 300 to 500.
 * start range = 300 ; End range = 500;
 */

function printEvenNums1() {
    for (let i = 300; i <= 500; i++) {
        if (i % 2 === 0) {
            console.log("Even number is " + i);
        }
    }
}
//   printEvenNums1();


/**
 *1. write a function to print even no. between 1000 to 2000.
 * start range = 1000 ; End range = 2000;
 */

function printEvenNums2() {
    for (let i = 1000; i <= 2000; i++) {
        if (i % 2 === 0) {
            console.log("Even number is " + i);
        }
    }
}
//   printEvenNums2();


/**
 *1. write a function to print even no. between two numbers.
 * start range = num1; End range = num2;
 * 
 */

function printEvenNums2(num1, num2) {
    console.log("===================== input range ", num1, num2);
   
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {


            console.log("Even number is " + i);
           
        }
    }
    
}
//calling the function..
//   printEvenNums2(5,50);
//   printEvenNums2(25,175);
//   printEvenNums2(550,650);

// let evenNum =  printEvenNums2(550,650);
// console.log(" all even nos. ", evenNum); 

/**
 * 2. Write a function to print all odd numbers in an array between 1 to 100. Ex: 1, 3, 5, 7, ....... , 97, 99, 
 */

function printOddNums() {

    let arr = [];
    console.log("===================== input range ", arr);
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }


    }
    console.log("All Odd number is ", arr);
    return arr; // this will contain all odd nos. between 1 - 100;


}
//calling the function...
 printOddNums();

/**
 * write a function to return all even numbers between two numbers.
 * strat range = arr1 ; End range = arr2;
 * start create a blank variable to store all even nos.
 * let arr = [];
 * match even no. put in this array, put all match even no. in this array.
 * return arr; // this will contain all even nos.
 * 
 */


function printEvenArr(arr1, arr2) {
    console.log("===================== input range ", arr1, arr2);
    let arr = []; 
    for (let i = arr1; i <= arr2; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    console.log(" all even nos. is ", arr);
    return arr; // this will contain all even nos.
}
//calling the function..
// let evenNum = printEvenArr(899, 1000);
/**
 * 1. Write a function to print all even numbers between 1 to 100. Ex: 2, 4, 6, 8, ....... , 98, 100
 2. Write a function to print all odd numbers between 1 to 100. Ex: 1, 3, 5, 7, ....... , 97, 99
 3. Write a function to print all numbers divisible by 3 between 1 to 100. Ex: 3, 6, 9, ...... 96, 99
 4. Write a function to print all numbers divisible by 5 between 100 to 200.
 */
 //3. Write a function to print all numbers divisible by 3 between 1 to 100. Ex: 3, 6, 9, ...... 96, 99
 /**
  * create a function
  * start range = 1; end range = 100;
  * for loop
  * check numbers are divisible by 3
  * print it
  * call the function
  */

 function printDivNum(){
    for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log(" This no. is divisible by 3 " +i);

    }

 }
}
// calling the function..
// printDivNum();

// 4. Write a function to print all numbers divisible by 5 between 100 to 200.
/**
 * 
  * create a function
  * start range = 100; end range = 200;
  * for loop
  * check numbers are divisible by 
  * print it
  * call the function
  */
  
 function printDivNums(){
    for(let i = 100; i <= 200; i++){
    if(i % 5 === 0){
        console.log(" This no. is divisible by 5 " +i);

    }

 }
}
// calling the function..
// printDivNums();

// 2. Write a function to print all odd numbers between 1 to 100. Ex: 1, 3, 5, 7, ....... , 97, 99


function printOddNums() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log("Odd number is " + i);
        }
    }
}
//   printOddNums();


// 1. write a function to print odd no. between two numbers.
// start range = num1; end range = num2;
function printOddNums(num1,num2){
    console.log("================ input range ", num1,num2);
    for(let i = num1; i <= num2; i++){
        if(i % 2 !== 0 ){
            console.log("Odd number is " + i);
        }

    }

}
    //calling the function...
    printOddNums(1000,1150);