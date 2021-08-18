//############
//#!Variables
//############
    let changing = "changing variable";
    const static = "static variable";


//##################
//#!Arrow Functions
//##################
    function myFunc() { //Normal function
        //...
    }
    const myFun = () => { //Arrow function
        //...
    }
    // No more issues with the THIS keyword.
    // THIS will always keep it's conext in an arrow function

    function printMyName(name) {
        console.log(name);
    }
    printMyName('Sam');

    const printMyName = (name) => {
        console.log(name);
    }
    printMyName('Sam');

    const multiply = (number) => {
        return number * 2;
    }
    console.log(multiply(2))

    // Shothand for a simple function
    const multiply = number => number * 2;
    console.log(multiply(2))


//#####################################
//#!Exports and Imports - Modular Code
//#####################################
    // person.js
    const person = {
        name:'Sam'
    }
    export default person;

    // utility.js
    export const clean = () => {'...'};
    export const baseData = 10;

    // app.js
    import person from './person.js'
    import prs from './person.js'

    import {baseData} from './utlity.js'
    import {clean} from './utlity.js'

    //default export 
    import person from './person.js'
    import prs from './person.js'

    //named export
    import {smith} from './utlity.js'
    import {smith as Smth} from './utlity.js'
    import * as bundled from './utlity.js'      //import everyting as JS object bundled
    // bundled.baseData
    // bundled.clean

//#######################
//#!Understanding Classes
//#######################
    //Classes are blueprints for objects
    class Person {
        name = 'Sam'            //property
        call = () => {'...'}    //method

    }

    //Constructor - class useage
    const myPerson = new Person()  //calling the class
        myPerson.call()            //object construction
    console.log(myPerson.name)

    //Inhertitance (prototypes)
    //class Person extends Master

    //Example
    class Person {
        constructor() {
            this.name = 'Sam'
        }
    }

