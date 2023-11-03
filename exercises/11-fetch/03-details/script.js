/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const heroId = document.getElementById("hero-id").value;
        const target = document.getElementById("target");
      
        fetch(`http://localhost:3000/heroes/${heroId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Hero not found");
            }
            return response.json();
          })
          .then((data) => {
            const template = document.getElementById("tpl-hero");
            const target = document.getElementById("target");
      
            // Clear previous content
            target.innerHTML = "";
      
            const clone = document.importNode(template.content, true);
      
            const nameElement = clone.querySelector(".name");
            const alterEgoElement = clone.querySelector(".alter-ego");
            const powersElement = clone.querySelector(".powers");
      
            nameElement.textContent = data.name;
            alterEgoElement.textContent = data.alterEgo;
            powersElement.textContent = data.abilities.join(", ");
      
            target.appendChild(clone);
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
      });
      
})();
