const inputElement = document.getElementById("input-value");
const convertBtn = document.getElementById('convert-btn');
const lengthElement = document.getElementById("length-result");
const volumeElement = document.getElementById("volume-result");
const massElement = document.getElementById("mass-result");

const inputMin = 0;
const inputMax = 9999999;


// Validate the input on button click
convertBtn.addEventListener('click', () => {
    //Get the trimmed input value
    let value = inputElement.value.trim();
    //Remove non-numeric characters except decimal points
    value = value.replace(/[^0-9.-]/g, '');
    //Remove multiple decimal points if more than 1
    const parts = value.split('.');
    //Scenario: Multiple decimal places
    if (parts.length > 2) {
        //Remove all other decimal points
        value = parts[0] + '.' + parts.slice(1).join('');
    }
    //Otherwise treat as correct input and carry on

    //Convert back to number for range validation
    const numValue = parseFloat(value);
    console.log(`num value is ${numValue}`)
    //Range validation
    if (isNaN(numValue) || numValue < inputMin || numValue > inputMax) {
        alert(`Please enter a valid number between ${inputMin} and ${inputMax}`);
        return;
    }

    // Round to 2 decimal places
    const rounded = Math.round(numValue * 100) / 100;

    //Update the input value
    inputElement.value = rounded
    // If no range error -> convertUnits
    convertUnits(rounded);



})

function convertUnits(value) {

}