/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {
        // Find the input element and the character count indicator element
        const input = document.getElementById("pass-one");
        const counter = document.getElementById("counter");
    
        // Add an input event listener to the input element
        input.addEventListener("input", () => {
            // Get the current input value
            const inputValue = input.value;
    
            // Update the character count in the indicator
            counter.textContent = inputValue.length + "/10";
    
            // If the character count is greater than 10, prevent further input
            if (inputValue.length > 10) {
                input.value = inputValue.slice(0, 10);
            }
        });
    })();
})();
