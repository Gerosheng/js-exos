/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Find the target element where you want to display the phone number
    const target = document.getElementById("target");

    // Find all the buttons
    const buttons = document.querySelectorAll(".actions button");

    // Add click event listeners to each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the current phone number
            let phoneNumber = target.textContent.replace("+", "").split('');

            // Get the part (id) associated with the clicked button
            const part = button.id;

            // Increment the corresponding part of the phone number
            if (part === "part-one") {
                phoneNumber[0] = incrementPart(phoneNumber[0], 4, 9);
            } else if (part === "part-two" || part === "part-three" || part === "part-four") {
                const index = parseInt(part.slice(-1)) + 1;
                phoneNumber[index] = incrementPart(phoneNumber[index], 0, 9);
            }

            // Display the updated phone number
            target.textContent = `+${phoneNumber.join('')}`;
        });
    });

    // Function to increment a phone number part within a specified range
    function incrementPart(part, min, max) {
        let value = parseInt(part);
        if (value < max) {
            value++;
        } else {
            value = min;
        }
        return value.toString().padStart(2, "0");
    }
})();
