/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
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
            const heroId = document.getElementById("hero-id").value;
    
            if (!heroId) {
                console.error("Please enter a hero ID.");
                return;
            }
    
            try {
                const response = await fetch(`http://localhost:3000/heroes/${heroId}`, {
                    method: "DELETE",
                });
    
                if (!response.ok) {
                    console.error("Failed to delete the hero.");
                    return;
                }
    
                console.log(`Hero with ID ${heroId} has been deleted.`);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        });
    })();
    
})();
