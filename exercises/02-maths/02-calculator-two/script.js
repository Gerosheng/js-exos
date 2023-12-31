/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

const performOperation = operation => {
        // perform the operation
        var stringNumberOne = document.getElementById("op-one").value;
        var numberOne = parseFloat(stringNumberOne);

        var stringNumberTwo = document.getElementById("op-two").value;
        var numberTwo = parseFloat(stringNumberTwo);

        switch (operation) {
            case "addition":
                alert(numberOne + numberTwo);
                break;
            case "substraction":
                alert(numberOne - numberTwo);
                break;
            case "multiplication":
                alert(numberOne * numberTwo);
                break;
            case "division":
                alert(numberOne / numberTwo);
                break;            
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
