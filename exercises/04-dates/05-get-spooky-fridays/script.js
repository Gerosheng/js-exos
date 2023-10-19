/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click",function(){
        const year = document.getElementById("year").value;
        friday13MonthsInYear(year);
    });
    function friday13MonthsInYear(year){
        const monthsWithFriday13 =[];
        for(let month = 0; month < 12; month++){
            const date = new Date(year, month, 13);
            if (date.getDay() === 5) {
                monthsWithFriday13.push(date.toLocaleString("fr-FR", {month:"long"}));
            }
        }
        alert(`Mois qui contiennent un vendredi 13 en ${year}: ${monthsWithFriday13}`)
    }
})();
