/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        try {
            const articles = await window.lib.getPosts();
    
            for (const article of articles) {
                const comments = await window.lib.getComments(article.id);
                article.comments = comments;
            }
    
            console.log(articles);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });
})();
