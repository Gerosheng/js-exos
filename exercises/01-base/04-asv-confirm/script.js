/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    while (!confirmation){
    var age = prompt("Quel est vôtre âge?","42");
    var sexe = prompt("Quel est vôtre sexe?", "H/F/X");
    var ville = prompt("Quelle ville habitez-vous?", "Bruxelles");
    
    var confirmation = confirm("Réponses:\n"+ age +"\n"+ sexe +"\n"+ ville +"\n"+"Confirmez-vous ces réponses?");

    if (confirmation){
        alert("Merci pour vos réponses");
    } else {
        alert("Réponses non confirmées, veuillez réessayer");
    }
    }
})();
