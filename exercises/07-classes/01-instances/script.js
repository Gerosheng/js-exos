/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
   function createCatInstances(){
    const skitty = new Cat("Skitty", 9);
    const pixel = new Cat("Pixel", 6);

    console.log("Cat 1:", skitty);
    console.log("Cat 2:", pixel);
   }
   const runButton = document.getElementById("run");
   runButton.addEventListener("click", createCatInstances);

})();
