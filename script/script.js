/**
 * 
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step-1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById() to access the input field
 * step-4: get value from the input field.(value is string now).
 * step-5: convert the value to a number (use parseFloat)
 */ 
function calculateTriangle(){
    const triangleBaseInput = document.getElementById('triangle-base');
    // console.log(triangleBaseInput);
    const triangleBaseText = triangleBaseInput.value;
    // console.log(triangleBaseText);
    // console.log(typeof triangleBaseText);
    const base = parseFloat(triangleBaseText);
    console.log(base);
    
    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height); 

    // calculate triangle area
    const area = 0.5 * base * height;
    // console.log(area);

    // display triangle area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area; 

    triangleBaseInput.value = "";
    triangleHeightInput.value = "";
}

// rectangle area calculate
function calculateRectangle(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidthInput.value)
    console.log(width);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLengthInput.value)
    console.log(length);

    const area = width * length;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

    rectangleWidthInput.value = "";
    rectangleLengthInput.value = "";
  
}

// Parallelogram 
function calculateParallelogram(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    // document.getElementById('parallelogram-area').innerText = area; 
    setInnerTextById('parallelogram-area', area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;      
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}