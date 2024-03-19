// Declaration of an empty array to store calculation history
let myArray = [];

// Function to add numeric values or operators to the display
function addValue(val) {
    // Check for errors in the input
    if (errorCheck(val)) {
        document.getElementById('display').value = 'Error';    
        disableButtons(); // Disable all buttons in case of an error
        return;
    }
    document.getElementById('display').value += val;
}

// Function to calculate and display the result
function result() {
    let result = eval(document.getElementById('display').value);
    myArray.push(result); // Store the result in the history array
    document.getElementById('display').value = result; // Display the result
    document.getElementById('display2').value = myArray.join(' '); // Display the calculation history
}

// Function to clear the display and enable buttons for new input
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('display2').value = '';
    enableButtons(); // Enable all buttons
    myArray = []; // Clear the history array
}

// Function to check for errors, specifically when two operators meet consecutively
function errorCheck(val) {
    let lastChar = myArray[myArray.length - 1];
    if (/[\+\-\*\/]{2}/.test(lastChar + val)) {
        return true; // Return true if two operators are input consecutively
    }
    return false; // Return false otherwise
}

// Additional functions for button manipulation

// Function to disable all buttons except the Clear button
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent !== 'Clear') {
            button.disabled = true; // Disable each button except Clear
        }
    });
}

// Function to enable all buttons
function enableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false; // Enable each button
    });
}

// Placeholder function for a feature that seems incomplete or not used
function historyCalculations() {
    document.getElementById('historyCal').html = result; // Placeholder, unclear functionality
}