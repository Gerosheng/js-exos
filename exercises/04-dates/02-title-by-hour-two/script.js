/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    let timeGreet = "";
    const t = new Date();
    const hours = t.getHours();
    const minutes = t.getMinutes();

    if (hours < 17 || (hours == 17 && minutes < 30)){
        timeGreet = "Bonjour";
    } else {
        timeGreet = "Bonsoir";
    }

    document.getElementById("target").innerHTML = timeGreet;
})();
