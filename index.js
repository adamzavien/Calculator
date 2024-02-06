// Get the display element by its ID
const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate the expression in the display
function calculate() {
    try {
        // Use eval to evaluate the expression and update the display
        display.value = eval(display.value);
    } catch (error) {
        // Handle any errors during evaluation and display an error message
        display.value = "Error";
    }
}
