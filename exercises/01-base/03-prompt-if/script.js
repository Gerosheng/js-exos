/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var gateau = prompt('Voulez-vous du gâteau?');
    if (gateau == 'oui'){
        alert("Félicitation!");
    } else if (gateau == 'non'){
        alert("Du gâteau, ça ne se refuse pas!");
    } else {
        alert("Veuillez répondre par 'oui' ou par 'non'");
    };
})();
