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
    //Inheritance is compareable to prototypes
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
    class Human {                    //class
        constructor() {              //constructor
            this.gender = 'male';
        }
        
        printGender(){               //method
            console.log(this.gender)
        }
    }

    class Person extends Human{      //class inheritence
        constructor() {              //constructor
            super();                 //executes the parent constuctor
            this.name = 'Samantha';
            this.gender = "Female";
        }

        printMyName() {              //method
            console.log(this.name);
        }
    }

    const person = new person();
    Person.printMyName();
    Person.printGender();

//################################################
//#!Calsses, Properties & Methods (Modern Syntax)
//################################################
    //Properties are like "variables attached to classes/objects"
        //ES6 
        /*
        Constructor (){
            this.myProperty = 'Value'
        }
        */
    //ES7
        myProperty = 'Value';

    //Methods are like "fiunctions attached to classes/objects"
    //ES6
        //myMethod () {'...'}
    //ES7
        myMethod = () => {'...'}
    
    //Example ES7 (next Gen JS)
    class Human {
        gender = 'male';

        printGender = () => {
            console.log(this.gender);
        }
    }

    class Person extends Human {
        name = 'Samantha';
        gender = "female";

        printMyName = () => {
            console.log(this.name);
        } 
    }
    const person = new person();
    Person.printMyName();
    Person.printGender();

//#########################
//#!Spread & Rest Operators
//#########################
    //Spread Operator
    const numbers = [1, 2, 3];
    const newNumbers = [numbers, 4]; //This would crreate [[numbers], 4]
    const newNumbers = [...numbers, 4]; //Creates [1, 2, 3, 4].
    console.log(newNumbers);

    const person = {
        name: 'Sam'
    };

    const newPerson = {
        ...person,
        age: 28
    };
    console.log(newPerson) 
    /*
    [object Object] {
        ages: 28,
        name: "Max"
    }
    */

    //Rest Operator
    const filter = (...args) => {
        return args.filter(el => el == 1); //Inline is true statement tre/false
    }
    console.log(filter(1, 2, 3)); //Output [1]

//#################
//#!Deconsturcting
//#################
    //Array Deconstructing
    const numbers = [1, 2, 3];
    [num1, , num3] = [numbers];
    console.log(num1, num3)

    //Object Deconstructing
    //{name} = {name: 'Sam', age: 20}
    //console.log{name} //Output: Sam

//#################
//#!Reference and Primative Types
//#################