/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {
        document.getElementById("run").addEventListener("click", async () => {
            const name = document.getElementById("hero-name").value;
            const alterEgo = document.getElementById("hero-alter-ego").value;
            const powers = document.getElementById("hero-powers").value.split(", "); // Split powers into an array
    
            if (!name || !alterEgo || !powers) {
                console.error("All fields must be filled.");
                return;
            }
    
            const data = {
                name,
                alterEgo,
                abilities: powers,
            };
    
            try {
                const response = await fetch("http://localhost:3000/heroes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
    
                if (!response.ok) {
                    console.error("Failed to add the hero.");
                    return;
                }
    
                const addedHero = await response.json();
                console.log("Hero added:", addedHero);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        });
    })();
    
})();
