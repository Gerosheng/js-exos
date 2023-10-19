/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = document.getElementById("run");
    button.addEventListener("click", () =>{

        const randomNumbers = [];
        for (i = 0; i < 10; i++){
            const geneNumber = Math.floor(Math.random() * 100) + 1;
            randomNumbers.push(geneNumber);
        }
        
        for (i = 0; i < randomNumbers.length; i++){
            const balise = document.getElementById(`n-${i+1}`);

            if (balise){
                balise.textContent = randomNumbers[i];
            }
        }

        const min = Math.min(...randomNumbers);
        const max = Math.max(...randomNumbers);
        const sum = randomNumbers.reduce((acc,num) => acc + num, 0);
        const average = sum / randomNumbers.length;

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;


/*  these are longer ways to get those stats, without the js Math() methods.
        let min = numbers[0]; // Assume the first number is the minimum initially

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i]; // Update min if a smaller number is found
            }
        }

        let max = numbers[0]; // Assume the first number is the maximum initially

        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > max) {
            max = numbers[i]; // Update max if a larger number is found
          }
        }
        
        let sum = 0; // Initialize the sum to 0

        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i]; // Add each number to the sum
        }
*/
    })
})();
