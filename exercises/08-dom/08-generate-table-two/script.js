/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = document.getElementById("target");
    const table = document.createElement("table");

    for (let i=1; i <= 10; i++){
        const row = document.createElement("tr");

        for (let j=1; j<=10; j++){
            const cell = document.createElement("td");
            const result = i*j;

            cell.textContent = `${i} x ${j} = ${result}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    target.appendChild(table);
})();
