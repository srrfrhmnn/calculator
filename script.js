//function to add two numbers
function add(a, b) {
    return a + b;
}

//function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

//function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

//function to divide two numbers
function divide(a, b) {
    return a / b;
}

function operate(a,b,operation){
    return operation(a,b);
}


//add event listener to all divs with class "button"
document.querySelectorAll(".button").forEach(function(element){
    element.addEventListener("click", function(event){
        //get the value of the button that was clicked
        let value = event.target.innerText;
        //get the display element
        let display = document.getElementById("display");
        //get the current value of the display
        let currentValue = display.innerText;
        //check if the value is a number
        if(!isNaN(value)){
            //add the number to the end of the current value
            display.innerText = currentValue + value;
        } else {
            //if the value is not a number, check what kind of button it is
            if(value == "clear"){
                //if it is the clear button, set the display text to an empty string
                display.innerText = "";
            } else if(value == "="){
                //if it is the equals button, calculate the value of the display text
                display.innerText = eval(display.innerText);
            } else if(value == "delete"){
                //if it is the delete button, remove the last character from the display text
                display.innerText = currentValue.slice(0, -1);
            } else {
                //if it is any other button, add the value to the end of the display text
                display.innerText = currentValue + value;
            }
        }
    });
});