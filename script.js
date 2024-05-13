let firstNumber = 0;
let operator = -1;
let displayNumber = 0;
let isSecondNumber = 0;

const add = (number1,number2) => {
    return number1+number2;
};

const subtract = (number1,number2) => {
    return number1-number2;
};

const multiply = (number1,number2) => {
    return number1*number2;
}

const divide = (number1,number2) => {
    if(number2!=0){
        return Math.floor(number1/number2);
    }
    alert("Stop being a loda!");
    return number1;
}

const operate = (number1,number2,operatorFunc) => {
    if(operatorFunc==0){
        return add(number1,number2);
    }
    else if(operatorFunc==1){
        return subtract(number1,number2);
    }
    else if(operatorFunc==2){
        return multiply(number1,number2);
    }
    else{
        return divide(number1,number2);
    }
}

const display = document.getElementsByClassName("display")[0];

const updateDisplay = (number) => {
    displayNumber*=10;
    displayNumber+= number;
    while(Math.abs(displayNumber)>=100000000){
        displayNumber=Math.floor(displayNumber/10);
    }
    display.textContent=`${displayNumber}`;
};

updateDisplay(0);

const updateDisplayStrict = (number) => {
    displayNumber = Math.floor(number);
    while(Math.abs(displayNumber)>=100000000){
        displayNumber=Math.floor(displayNumber/10);
    }
    display.textContent=`${displayNumber}`;
}

const resetDisplay = () => {
    isSecondNumber = 0;
    updateDisplayStrict(0);
};

const numberButtons = Array.from(document.getElementsByClassName("number"));

numberButtons.forEach(element => {
    element.addEventListener("click", () => {
        updateDisplay(parseInt(element.value));
    });
});

const onOperatorClick = (operatorval) => {
    if(isSecondNumber){
        displayNumber = operate(firstNumber,displayNumber,operator);
        updateDisplayStrict(displayNumber);
        operator = operatorval;
    }
    else{
        firstNumber = displayNumber;
        updateDisplayStrict(0);
        operator = operatorval;
        isSecondNumber = 1;
    }
}

const operatorButtons = Array.from(document.getElementsByClassName("operator"));

operatorButtons.forEach(element => {
    element.addEventListener("click", () => {
        onOperatorClick(parseInt(element.value));
    });
});

const percentage = () => {
    displayNumber/=100;
    updateDisplayStrict(displayNumber);
};

const reverseSign = () => {
    displayNumber*=-1;
    updateDisplayStrict(displayNumber);
}

const calculate = () => {
    if(isSecondNumber){
        displayNumber = operate(firstNumber,displayNumber,operator);
        updateDisplayStrict(displayNumber);
        isSecondNumber = 0;
    }
}