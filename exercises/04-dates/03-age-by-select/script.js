/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function (){
        let day = document.getElementById("dob-day").value;
    
        let month = document.getElementById("dob-month").value;
    
        let year = document.getElementById("dob-year").value;
    
        dobConverter(day, month, year);

    });

    function dobConverter(Day, Month, Year){

        let dob = new Date(Year, Month - 1, Day);
        let today = new Date();

        let yearDob = dob.getFullYear();
        let yearToday = today.getFullYear();

        let age = yearToday - yearDob;

        alert(`Vous avez ${age} ans`);

    };

})();
