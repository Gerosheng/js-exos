/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const passOne = document.getElementById("pass-one");
    const passTwo = document.getElementById("pass-two");
    const runButton = document.getElementById("run");

    runButton.addEventListener("click", () => {
        const passwordOneValue = passOne.value;
        const passwordTwoValue = passTwo.value;

        if (passwordOneValue === passwordTwoValue){
            passOne.style.border = "1px solid green";
            passTwo.style.border = "1px solid green";
        } else {
            passOne.style.border = "1px solid red";
            passTwo.style.border = "1px solid red";
        }
    });
})();
