function updateDisplay(parm) {
    const display = document.getElementById('display');

    if (display.value.length > 20) {
        alert('Maximum length exceeded');
        display.value = '';
    }

    if (display.value.length === 0 
        || (parseInt(display.value) === 0 
        && parm !== '.' 
        && parm !== '/' 
        && parm !== '*' 
        && parm !== '+' 
        && parm !== '-')) {
        display.value = parm;
    }
    else {
        display.value += parm;
    }   
    // alert(`display: ${display.value}`);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid expression');
        display.value = '';
    }
}