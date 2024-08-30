//  check input number is less than 220 and divided by 4

/* step 1 : Start
   step 2 : Input a number
   step 3 : check input number is smaller than 220 and divisible by 4
   step 4 : check input number is either not less than 220 and not divisible by 4
   step 5 : End

*/  

function checkLessThan(digit){ 
    console.log("input number = " + digit);

    if(digit <= 220 && digit % 4 === 0){
        console.log("input number " + digit + " is smaller than " + 220 + " and divisible by 4 " );

    }
    else {
        console.log("input number " + digit + " is either not less than " + 220 + " and not divisible by 4 " );

    }

}
    checkLessThan(210);
    checkLessThan(450);
    checkLessThan(200);

    // make two input box , one operator box and one switch to find total of two number which we put into two input box

function total(){
    let a = document.getElementById("input1").value; // document ke ander id name  input1 ka value a variable me store karenge.
    let b = document.getElementById("input2").value; // document ke ander id name input2 ka value b variable me store karenge.

        console.log(a);
        console.log(b);

    let d = document.getElementById("operator").value;

    let q = calculator(a, b, d); // calculator function calling with 3 values and its return value will store in d variable

   
    console.log(q);
   
    document.getElementById("equal").innerHTML = q;
 }
 


 function calculator(input1, input2, operator) {

    let result = null; // value of variable result is null , we can put anything in the value like name number .
       
    console.log(result);
    
    input1 = parseInt(input1);
    input2 = parseInt(input2);
 
 
    console.log(input1);
    console.log(input2);
 
    console.log(typeof (input1),typeof(input2)); // type of input1 and input2 print 

    // condition applied for input1 is not equal to number : input2 is not equal to number
    if ((typeof (input1) !== "number") || (typeof (input2) !== "number")) {
 
       result = "invalid input number"; // result will be invalid
       return result; // input number is not correct
 
 
    }  


switch (operator) {
    case '+':
       result = parseInt(input1) + parseInt(input2);
       break;

    case '-':
       result = input1 - input2;
       break;

    case '*':
       result = input1 * input2;
       break;


    case '/':
       result = input1 / input2;
       break;

    default: 
       result = "invalid operator";
       console.log('Invalid operator');

 }
   
 return result; // get total of input1 and input2
 }


document.getElementById("equal").onclick = total;

/*
Find odd number
step 1 : Start
step 2 : made a function with a name and paas arguements
step 3 : check arguenents are not divisible by 
step 4 : check odd number among them compare to each other
step 5 : End


 */

function findOddNumber(a,b,c){
    console.log("first number = " + a + " second number = " + b + " third number = " + c );
    let oddFound = false; //oddfound is a variable and we put the value of it false
                
     if(a % 2 !== 0){  // if a is divisible by 2 than its even no. : false
                             // if a is not divisible by 2 its odd : true
      
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
  findOddNumber(10,7,9);


//   find input number is equal to 12 and smaller than 15
//    

  function findNumberEqualAndLessThan(num) {
    console.log("input number = " + num);
    
    if(num == 12){ 
      
     // first if statement
      
     if(num < 15) { // nested if statement
          console.log("input number " + num + " is smaller than 15");
     }
    else {
      console.log("num is greater than 15");
     
    }
    
    }
      else {
        consol.log("input number is less than 15")
      }
       if(num == 18){ 
        
     }    // nested -if statement
      if(num < 25){
        
         console.log("input number " + num + " is smaller than 25 too");
      }
        
   else {
        console.log("num is greater than 25");
      
   
   
   }
       
    }
      findNumberEqualAndLessThan(9);
    