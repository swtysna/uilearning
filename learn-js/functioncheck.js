 console.log("======= functioncheck.jsfilestarting ======");



 function prePostIncrement() {
    let w = 5;
    let i = w++;
    console.log('i = ' + i );
    console.log("w = " + w);
    
    let b = 8;
    let o = ++b;
    console.log("o = " + o);
    console.log("b = " + b );
  }
  prePostIncrement();
  
  function checkOddEven(num) {
    console.log("input number = " + num); // 9 , 8
    let remndr = num % 2; // 9 % 2 = 1 , 8 % 2 = 0
    
    if(remndr == 0){
      console.log("input number " + num + " is even.");
     
    }
    else {
      console.log("input number " + num + " is odd.");
    }
  }
   
  checkOddEven(8);
  checkOddEven(13);

    checkString(1000);
   
  
  
function checkGreater(digit) {
    console.log("input number = " + digit); // 100 
    
    // comparing number is greater than 10, will return true or false.
    // if true will go inside if block otherwise (in case of false) will go to else block.
    
    if(digit > 10){
      console.log("input number " + digit + " is greater than 10 ");
    }
    else {
    console.log("input number " + digit + " is less than 10");
  }
  }
    //checkGreater(100);
     //checkGreater(3);
     //checkGreater(89);
  
  // comparing two numbers, 100, 99 
  
  function compareNumber(num, toCompare) {
    //num is 100 and compare this to 99
    console.log("input number is " + num + " and compare this to " + toCompare );
    if(num > toCompare){
      console.log("input number " + num + " is greater than  " + toCompare );
      
    }
    else {
      console.log("input number " + num + " is less than " + toCompare );
      
    }
  }
  //compareNumber(25, 100);
  //compareNumber(500, 450);
  
  // input number is greater than 100 and less than 150.
  
  /* 
  AND operater
  true && true : true
  false && true: false
  true && false: false
  false && false: false
  */
  
  function testAndOperator(num){
    // if num is greater than 100 and less than 150.
    // print
    
    // 70 > 100 false, 70 < 150 true
    if(num > 100 && num < 150){
      console.log("input number " + num + " is greater than " + 100 + " and less than 150 ");
      
    }
    else {
      console.log("input number " + num + " is either not less than " + 100 + " or greater than 150 ");
      
    }
    
  }
  
   //testAndOperator(135);
   //testAndOperator(155);
    //testAndOperator(70);
  
  
  //1. check input number is less than 250 and divided by 5
  
  function compareAndCheck(digit) {
    console.log("================= compareAndCheck ===============");
    console.log("input number = " + digit);
    // if input num is less than 250 and divided by 5.
    // print
    
      // 245 < 250 true, < 250 true 
    // 649 < 250 false && 649 % 5 not equal to zero : false = false
    // 83 < 250 true && 83 % 5 equal to 3 : false =false
    // 250 <= 250 true && 250 % 5 equal to 0 : true = true
    
    if(digit <= 250 && digit % 5 === 0){
      
      console.log("input number " + digit + " is less than or equal to " + 250 + " and divisible by 5 " );
      
    }
    else {
      console.log("input number " + digit + " is either not less than " +250 + " or not divisible by 5 ");
    }
  }
  
   //compareAndCheck(245);
   //compareAndCheck(649); 
   //compareAndCheck(125);
   //compareAndCheck(83);
   //compareAndCheck(250);
  
  //2. check input number is divided by 4 and 6 both
  
  
  function checkDivisible(num) {
    
    console.log("========= checkDivisible ========= ");
    // check input num is number
    console.log(typeof(num));
    // sonali ; input number sonali is string and this is not a number type
    if(typeof(num) !== "number"){
      console.log("input number " + num + " is " +typeof(num)+ " and this is not a number type");
      return true;
      
      
    } 
    console.log("input number = " + num);
    // if input number is divisible by 4 and 6 both.
    // print
    // == checkDivisible ==
    // 56 % 4 true && 56 % 6 not equal to 0 false = false
    // 24 : true && true = true
    // 96 : true && true = true
    // 20 : true && false = false
    // 89 : false && false = false
    if(num % 4 === 0 && num % 6 === 0){
      console.log("input number " + num + " is divisible by " + 4 + " and divisible by 6" );
    }
    else 
      // 89 % 4 false && 89 % 6 false = false
      if(num % 4 === 0 && num % 6 !== 0){
         console.log("input number " + num + " is divisible by " + 4 + " and not divisible by 6" );
  
      }
      else if(num % 4 !== 0 && num % 6 === 0){
         console.log("input number " + num + " is not divisible by " + 4 + " and divisible by 6" );
  
        
      }
    // sonali % 4 = NaN 
      else if(num % 4 !== 0 && num % 6 !== 0){
         console.log("input number " + num + " is not divisible by " + 4 + " and not divisible by 6" );
  
      }
      else {
         console.log("input number " + num + " is invalid");
  
      }
    
    
  }
   //checkDivisible(56);
     checkDivisible(24);
  // //  checkDivisible(96);
  // //  checkDivisible(20);
  //  checkDivisible(89);
  //  checkDivisible(28);
  //  checkDivisible(0);
  //   checkDivisible(7);
  //  checkDivisible(-100);
   checkDivisible("10");
   checkDivisible("sonali");
   
  
  //3. check input number is either greater than 300 OR less than 500.
  
  function checkEitherThan(digit) {
    console.log("input number = " + digit);
     //input number is either greater than 300 OR less than 500.
  
    
    // 730 > 300 true, 730 < 500 false
    if(digit > 300 && digit < 500 ) {
      console.log("input number " + digit + " is greater than " + 300 + " and less than 500");
    }
    else {
       console.log("input number " + digit + " is either not less than " + 300 + " or greater than 500");
    }
    
  }
  // checkEitherThan(450);
  // checkEitherThan(550);
  // checkEitherThan(50);
  // checkEitherThan(730);
  
  //4. check input string is sonali print succes input string is match with sonali.
  //
  // if input str is equal to sonali
  // if input string is sonali and its correct
  // else input string is guddan and its not correct
  function checkString(str) {
    if(str === "sonali"){
      console.log("input string " +str + " is equal to sonali and its correct" );
    }
    else {
      console.log("input string " +str + " is not equal to sonali and its  not correct" );
    }
     
    
   
  
  }
   checkString("guddan");
   checkString("sonali");
   checkString(1000);
   
  
  
function findTheLargestNumber(a, b, c) {
  console.log("first number = " + a + ", second number = " + b + ", third number = " + c + ",");
  let d = 0;
  //700, 250, 350
  // 650, 1000, 200
  // largest number between first 2 numbers and store the largest number in another variable say d
 // 12 , 15 , 20
  // 12>0 d = 12
  // 700 > 0 : true
  // 650 > 0 : true
  if(a > d){ 
    d = a; // d = 12 // d = 650 // d = 700
  }// 15 > 12 d = 15
  
  
  //250 > 700 : false
  // 1000 > 650  :true
  if (b > d){
    d = b; // d = 15 // d = 1000 
    
    
  }// 20 > 15 d = 20
  
  // 350>700 : false
  // 200 > 1000 : false // it will go to the next
  if (c > d){ 
    
    d = c; // d = 20 // 
    
  }
   console.log("largest number = " + d);
  return d;
  
  
}

  findTheLargestNumber(12, 15, 20); // function calling with corresponding values or  parameters.
  
  let z = findTheLargestNumber(100,200,500);

   function findTheLargestNumber(a, b, c){
     
     return a * b * c;
   }
  
    
  findTheLargestNumber(700,250,350); 
   findTheLargestNumber(650,1000,200);
  
  
   function findSmallestNumber(x,y,z,u){
    console.log("first number = "+ x + " second number = "+ y + " third number = "+ z  + " fourth number = " + u );
    
    let w = x; 
    
    console.log(w);
    
    if(y < w){
      //  : true w = y = 56
       
      
      
      // 25 < 175 : true w = y = 25
      
      w = y;
      
      
     
      
      
    }
    console.log(w);
     
    if(z < w){
      // true : w = z = 
      // 2 < 20 : true w = z = 
      // w = z : true w = z = 25
      // 
      w = z;
    }
    console.log(w);
    
    if(u < w){
      
      // u = w : false w = z 
      // true : w = u
       
     w = u;
      
    }
    
    console.log("smallest number = " + w); 
    
  }
  //    findSmallestNumber(90,56,28,43);
  
  //   findSmallestNumber(175,25,45,105);
  //    findSmallestNumber(20,12,2,3);
  //      findSmallestNumber(1,5,2,43);
  
  
  function findOddNumber(a,b,c){
    console.log("first number = " + a + " second number = " + b + " third number = " + c );
    let oddFound = false;
                
     if(a % 2 !== 0){
      
       oddFound = true;
      console.log(" odd number = " + a);
    }
    
    
    if(b % 2 !== 0){
      
        oddFound = true;  
     
       console.log(" odd number = " +b);
    }
   
    
    if(c % 2 !== 0){
      
      oddFound = true;
       console.log(" odd number = " +c);
  
    }
    
    if(!oddFound) {
      console.log(" there is no odd number ");
    }
  }
    findOddNumber(25,40,50);
  //   findOddNumber(85,80,97);
  //   findOddNumber(69,27,89);
    findOddNumber(100,20,60);
  
  
  
  const number = prompt("Enter a number: ");
  
  console.log("input number = " + number);
  
  if(number % 2 !== 0){
    
    console.log("hahaha you have entered an odd number ");
  }
  else{
    console.log("hahaha you have entered an even number");
  }
  
  
  
  function findNumberAndCompare(num){
    console.log("input number = " + num);
    
    if(num < 555 && num % 3 === 0){
      console.log("input number " + num + " is less than " + 555 + " and divisible by 3 "); 
     
    }
    else if(num > 555 && num % 3 !== 0 ) {
       console.log("input number " + num + " is greater than " + 555 + " and not divisible by 3 "); 
     
    }
    else if (num <= 555 && num % 3 === 0){
      console.log("input number " + num + " is less than and equal to " + 555 + " and divisible by 3 "); 
     
      
    }
    else if (num >= 555 && num % 3 === 0){
      console.log("input number " + num + " is greater than " + 555 + " and not divisible by 3 "); 
     
    }
    
    
  }
    findNumberAndCompare(554);
    findNumberAndCompare(556);
    findNumberAndCompare(288);
  
  
  
  
  
  
  
  
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  
  
  
  
  