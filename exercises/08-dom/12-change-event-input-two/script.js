/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {
        // Find the input element and the validity indicator element
        const input = document.getElementById("pass-one");
        const validity = document.getElementById("validity");
    
        // Add an input event listener to the input element
        input.addEventListener("input", () => {
            // Get the current input value
            const inputValue = input.value;
    
            // Check if the content has at least 8 characters and at least 2 digits
            const hasMinLength = inputValue.length >= 8;
            const hasTwoDigits = (inputValue.match(/\d/g) || []).length >= 2;
    
            // Update the validity indicator
            validity.textContent = hasMinLength && hasTwoDigits ? "ok" : "Pas ok";
        });
    })();
    
})();
