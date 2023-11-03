/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            const template = document.getElementById("tpl-hero");
            const target = document.getElementById("target");
      
            data.forEach((hero) => {
              const clone = document.importNode(template.content, true);
      
              const nameElement = clone.querySelector(".name");
              const alterEgoElement = clone.querySelector(".alter-ego");
              const powersElement = clone.querySelector(".powers");
      
              nameElement.textContent = hero.name;
              alterEgoElement.textContent = hero.alterEgo;
              powersElement.textContent = hero.abilities.join(", ");
      
              target.appendChild(clone);
            });
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
      });
      
})();
