/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    function bgColorChange(color){
        document.body.style.backgroundColor = color ;
    };

    document.getElementById("red").addEventListener("click",function () {
        bgColorChange("red");
    });

    document.getElementById("green").addEventListener("click", function () {
        bgColorChange("green");
    });
    
    document.getElementById("yellow").addEventListener("click",function () {
        bgColorChange("yellow");
    });

    document.getElementById("blue").addEventListener("click",function () {
        bgColorChange("blue");
    });


})();
