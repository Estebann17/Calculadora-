function updateDisplay(value) {
    document.getElementById('display').value = value;
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const buttonValue = button.textContent.trim();

            switch (action) {
                case 'clear':
                    updateDisplay('0');
                    break;
                case 'delete':
                    updateDisplay(display.value.slice(0, -1) || '0');
                    break;
                case 'equals':
                    try {
                        updateDisplay(eval(display.value) || '0');
                    } catch {
                        updateDisplay('Error');
                    }
                    break;

                case 'add':
                case 'subtract':
                case 'multiply':
                case 'divide':
                    updateDisplay(display.value + ` ${buttonValue} `);
                    break;
                
                default:
                    updateDisplay(display.value === '0' ? buttonValue : display.value + buttonValue);
                    break;
            }
        });
    });
});


 // Handle keyboard input
 document.addEventListener('keydown', (event) => {
    const key = event.key;

    switch (key) {
        case 'Backspace':
            event.preventDefault(); 
            updateDisplay(display.value.slice(0, -1) || '0');
            break;
        case 'Enter':
            event.preventDefault(); 
            try {
                updateDisplay(eval(display.value) || '0');
            } catch {
                updateDisplay('Error');
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        
            updateDisplay(display.value === '0' ? key : display.value + ` ${key} `);
            break;
        default:
          
            if (!isNaN(key) && key !== ' ') { 
                updateDisplay(display.value === '0' ? key : display.value + key);
            }
            break;
    }
});
