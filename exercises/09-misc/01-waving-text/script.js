/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = document.getElementById("target");
    const text = "Woo-hoo ! Je fais des vagues ! Wééééé ! Oh... je crois que je vais avoir le mal de mer...";
    const fontSizes = ["20px", "24px", "28px", "32px", "36px"];

    const wavyText = text.split(" ").map((word, index) => {
        const fontSize = fontSizes[index % fontSizes.length];
        return `<span style="font-size: ${fontSize}">${word}</span>`;
    }).join(" ");

    target.innerHTML = wavyText;

})();
