const inputElement = document.getElementById("input-value");
const convertBtn = document.getElementById('convert-btn');
const lengthElement = document.getElementById("length-result");
const volumeElement = document.getElementById("volume-result");
const massElement = document.getElementById("mass-result");

const inputMin = 0;
const inputMax = 9999999;


// Length
const FT_TO_M = 0.3048;
const M_TO_FT = 3.28084;

// Volume
const L_TO_GAL = 0.264172;
const GAL_TO_L = 3.78541;

// Mass
const KG_TO_LB = 2.20462;
const LB_TO_KG = 0.453592;



// Validate the input on button click
convertBtn.addEventListener('click', () => {
    //Get the trimmed input value
    let value = inputElement.value.trim();
    //Check for negative before cleaning
    if (value.match())
        //Replace comma with dots (support both separators)
        value = value.replace(/,/g, '.');
    //Remove non-numeric characters except decimal points
    value = value.replace(/[^0-9.]/g, '');
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
        alert(`Please enter a valid number between 0 and 9,999,999`);
        inputElement.value = '0';
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
    const convert = (val, conversionRate) => Math.trunc(value * conversionRate * 1000) / 1000;

    lengthElement.textContent = `${value} meters = ${convert(value, M_TO_FT)} feet | ${value} feet = ${convert(value, FT_TO_M)} meters`;
    volumeElement.textContent = `${value} liters = ${convert(value, L_TO_GAL)} gallons | ${value} gallons = ${convert(value, GAL_TO_L)} liters`;
    massElement.textContent = `${value} kilos = ${convert(value, KG_TO_LB)} pounds | ${value} pounds = ${convert(value, LB_TO_KG)} kilos`;

}


// Load numbers during initial load

convertUnits(parseFloat(inputElement.value.trim()));
