/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts()
            .then(articles => {
                return Promise.all(articles.map(article => {
                    return window.lib.getComments(article.id)
                    .then(comments => {
                        article.comments = comments;
                        return article;
                    });
                }));
            })
            .then(articlesWithComments => {
                console.log("Articles with comments:", articlesWithComments);
            })
            .catch(error => {
                console.error("An error occurred:", error);
            })
    })
})();
