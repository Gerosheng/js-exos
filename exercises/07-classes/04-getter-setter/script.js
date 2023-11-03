/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name(){
            return `${this.firstname} ${this.lastname}`;
        }

        set name(fullName) {
            const [first, last] = fullName.split(" ");
            this.firstname = first;
            this.lastname = last;
        }
    }

    function createPersonAndTestGetterSetter(){
        const person = new Person("John", "Doe");
        console.log("Initial Name:", person.name);

        person.name = "Alice Johnson";
        console.log("Updated Name:", person.name);
    }

    const runButton = document.getElementById("run");
    runButton.addEventListener("click", createPersonAndTestGetterSetter);
})();
