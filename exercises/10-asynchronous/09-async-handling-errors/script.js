/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // Wait function that returns a Promise to simulate delays
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// Function to get persons using async/await
async function getAndDisplayPersons() {
  try {
    // Call the async function to get persons
    const persons = await window.lib.getPersons();

    // Display the result in the console
    console.log(persons);
  } catch (error) {
    // Handle errors by displaying them in the console
    console.error(error);
  }
}

// Add a click event listener to the button
document.getElementById("run").addEventListener("click", getAndDisplayPersons);

})();
