/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // Add a click event listener to the button
document.getElementById("run").addEventListener("click", () => {
    // Use the fetch API to make a GET request to the API endpoint
    fetch("http://localhost:3000/heroes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Log the list of X-Men to the console
        console.log(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  });
  
})();
