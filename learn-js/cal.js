let display = document.getElementById("inputboard");
let buttons = document.querySelectorAll("button");
console.log(buttons);

let buttonsArray = Array.from(buttons);
console.log(buttonsArray);
let string = "";

buttonsArray.forEach(function (btn) {

    console.log(btn);

    btn.addEventListener("click", function (event) {
        // first click button 1
        // 2nd click button 2
        // 3rd click button +
        // 4th click button 5
        // 5th click button =

        if (event.target.innerHTML == "C") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (event.target.innerHTML == "AC") {

            string = "";
            display.value = string;
        }
        else if (event.target.innerHTML == "=") {

            string = eval(string); // string = eval("12+5") = 17

            display.value = string;
        }
        else {
            string += event.target.innerHTML; // string += 1 // string = string + 1 // string = "" + 1 = "1" // 
            // string += 2 // string = string +2 // string = "1" + 2 = "12"
            // click button + // string += + // string = string + "+" // string = "12" + "+" = "12+"
            // click button 5 // string = "12+5"
            // click button = // 

            display.value = string;


        }

    });




});


// attach on keyup event on input box

display.addEventListener("keyup", function (event) {
    console.log(event);
    string += event.key
});