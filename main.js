const display = document.getElementById('display');


const appendToDisplay = (input) => {
    display.value += input;
}


const clearDisplay = () => {
    display.value = "";
}

const calculate = () => {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = error.message;
    }
}
