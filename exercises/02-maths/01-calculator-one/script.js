/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        var stringNumberOne = document.getElementById("op-one").value;
        var numberOne = parseFloat(stringNumberOne);

        var stringNumberTwo = document.getElementById("op-two").value;
        var numberTwo = parseFloat(stringNumberTwo);

        alert(numberOne + numberTwo);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var stringNumberOne = document.getElementById("op-one").value;
        var numberOne = parseFloat(stringNumberOne);

        var stringNumberTwo = document.getElementById("op-two").value;
        var numberTwo = parseFloat(stringNumberTwo);

        alert(numberOne - numberTwo);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        var stringNumberOne = document.getElementById("op-one").value;
        var numberOne = parseFloat(stringNumberOne);

        var stringNumberTwo = document.getElementById("op-two").value;
        var numberTwo = parseFloat(stringNumberTwo);

        alert(numberOne * numberTwo)
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var stringNumberOne = document.getElementById("op-one").value;
        var numberOne = parseFloat(stringNumberOne);

        var stringNumberTwo = document.getElementById("op-two").value;
        var numberTwo = parseFloat(stringNumberTwo);

        alert(numberOne / numberTwo);
    });
})();
