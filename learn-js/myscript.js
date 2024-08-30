console.log("get");
console.log("I am sonali");
document.getElementById("address").innerHTML = "My first house";
document.getElementById("submit").innerHTML = "click to submit";

function clickme(){
// alert("you clicked button");
document.getElementById("submit").innerHTML = "hahaha you clicked!";
document.getElementById("mobile").innerHTML = "Mobile no.- 456789123";

}
// this function will tell me about  myself
function infoMyself(){
//alert("click here! show some love");
document.getElementById("myself").innerHTML = "Hello, I am SWEETY. I want to become a proffesional makeup artist.";

}



document.getElementById("submit").onclick = clickme;

document.getElementById("infomyself").onclick = infoMyself;

/*
1. create two input type text field in HTML code to enter nos.
2. store input two nos. into varriables, say a, b 
3. sum a & b and store into c. c = a + b
4. display c 



*/

function sum() {
    // get first no. and store into variable a
    var a = document.getElementById("first-no").value;

    var b = document.getElementById("second-no").value;



    console.log(a);
    console.log(b);
// parseint use for con verting string value to integer
    var c = parseInt(a) + parseInt(b);

    console.log(c);


    document.getElementById("total").innerHTML = c;

}

document.getElementById("sum").onclick = sum;


// TODO sum subtraction multiply divide
// check odd even input no.


function subtract() {
    // get first no. and store into variable a
    let x = document.getElementById("sub1").value;

    let y = document.getElementById("sub2").value;



    console.log(x);
    console.log(y);
 // parseint use for coverting string value to integer   
    let z = (x) - (y);

    console.log(z);


    document.getElementById("result").innerHTML = z;

}

document.getElementById("sub").onclick = subtract;



function mul() {
    // get first no. and store into variable a
    var a = document.getElementById("first").value;

    var b = document.getElementById("second").value;

    console.log(a);
    console.log(b);
 // parseint use for coverting string value to integer   
    var c = parseInt(a) * parseInt(b);

    console.log(c);


    document.getElementById("multi_total").innerHTML = c;

}

document.getElementById("multiply").onclick = mul;


document.getElementById("divide").onclick = divide;



function checkNumber() {
    // get first no. and store into variable a
    var a = document.getElementById(even).value;

    var b = document.getElementById(odd).value;

    console.log(a);
    console.log(b);

    var c = parseInt(a) +  parseInt(b);

    console.log(c);

 
 document.getElementById("result").innerHTML = c;   

}

document.getElementById("number").onclick = checkNumber;





