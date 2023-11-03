/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Find the elements for the two password inputs and the "Lancer le script" button
    const passOne = document.getElementById("pass-one");
    const passTwo = document.getElementById("pass-two");
    const runButton = document.getElementById("run");

    // Add a click event listener to the "Lancer le script" button
    runButton.addEventListener("click", () => {
        // Get the values of the two password inputs
        const passwordOneValue = passOne.value;
        const passwordTwoValue = passTwo.value;

        // Check if the passwords match
        if (passwordOneValue === passwordTwoValue) {
            // If they match, remove the "error" class (if any)
            passOne.classList.remove("error");
            passTwo.classList.remove("error");
        } else {
            // If they don't match, add the "error" class to both input fields
            passOne.classList.add("error");
            passTwo.classList.add("error");
        }
    });
})();

