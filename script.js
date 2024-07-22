let input = document.querySelector('input');  // Corrected spelling and selector
let buttons = document.querySelectorAll('button');
let string = "";
let resultShown = false; // Flag to track if the result is shown

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        
        if (value == '=') {
            try {
                string = eval(string).toString(); // Convert the result to a string
                input.value = string;
                resultShown = true; // Set the flag when the result is shown
            } catch {
                input.value = "Error";
                string = "";
                resultShown = false;
            }
        } else if (value == 'AC') {
            string = "";
            input.value = string;
            resultShown = false;
        } else if (value == 'DEL') {
            if (string.length > 0) {
                string = string.slice(0, -1); // Allow deleting from the result
                input.value = string;
            }
        } else {
            if (resultShown) {
                if (['+', '-', '*', '/'].includes(value)) {
                    string += value; // Continue operation with the result
                } else {
                    string = value; // Start a new calculation
                }
                resultShown = false;
            } else {
                string += value;
            }
            input.value = string;
        }
    });
});
