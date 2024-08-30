// 
function total() {
   let x = document.getElementById("num1").value; // document (current html page) ke ander id name (num1) ka value x variable me store karega

   let y = document.getElementById("num2").value; // form ka element . value hota hai
                                                   // document ke ander id name 
          console.log(x);
         console.log(y);

   let w = document.getElementById("operator").value;

   let d = calculator(x, y, w); // calculator function calling with 3 values and its return value will store in d variable

   
   console.log(d);
  
   document.getElementById("res").innerHTML = d;
}


/*

1. check type of number1 variable is number: typeof(number1); if type is not no. print invalid input number
2. check type of number2 variable is number: typeof(number2); if type is not no. print invalid input no.
3. check both input nos. at the same time : 
4. 
5. return : input number is not correct : if its a string .



*/

function calculator(number1, number2, operator) {

   let result = null; // value of variable result is null , we can put anything in the value like name number .
      
   console.log(result);
   
   number1 = parseInt(number1);
   number2 = parseInt(number2);


   console.log(number1);
   console.log(number2);

   console.log(typeof (number1),typeof(number2)); // type of number1 and number2 print 
   
   if ((typeof (number1) !== "number") || (typeof (number2) !== "number")) {

      result = "invalid input number";
      return result; // input number is not correct


   }





   switch (operator) {
      case '+':
         result = parseInt(number1) + parseInt(number2);
         break;

      case '-':
         result = number1 - number2;
         break;

      case '*':
         result = number1 * number2;
         break;


      case '/':
         result = number1 / number2;
         break;

      default: 
         result = "invalid operator";
         console.log('Invalid operator');

   }
     
   return result;

}

document.getElementById("add").onclick = total;

