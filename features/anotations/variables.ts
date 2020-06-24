const apples: number = 5; // reassign value is not allowed.

let apples1: number = 10; // it allowed to reassign the value
apples1 = 50;

/**
 * data types:
 * 
 * Primitive data types:
 *  1. number
 *  2. string
 *  3. boolean
 *  4. symbol
 *  5. void
 *  6. null
 *  7. undefined
 * 
 * Object types:
 *  1. functions
 *  2. classes
 *  3. arrays
 *  4. objects
 */


 let speed: string = 'fast';
 let hasName:  boolean = true;

 let nothingMuch: null = null;
 let nothing: undefined = undefined;

 // built in objects
 let now: Date = new Date();

 // Array: collection of the similar data types
 let colors: String[] = ['red', 'green', 'red'];

 let myNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];

 let truths: boolean[] = [true, true, false];


 // Classes: sometimes known as functions and also refers to the blueprint ofthe objects
 // class  are named with  the capital letter first
 class Car {
     // empty class
 }

 let car: Car = new Car();

 // Object literal
 let point: {x: number; y: number} = {
     x: 10,
     y: 20
 };

 // Function
// (i: number) => void  ---------------this is the anotationused in the function
 const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
 };


 // When to use annotations

 // 1.Function that returns the  'any' type
 const json = '{"x": 10, "y": 20}';
 const coordinates: {X: number; y: number} = JSON.parse(json);
 console.log(coordinates); // {x:10, y: 20}

 // 2. When we declare a variable on one line and initalize it later
 let words = ['red', 'green', 'blue'];
 let foundWord: boolean;

 for (let i = 0; i < words.length; i++) {
     if(words[i] === 'green') {
         foundWord = true;
     }
 }

 // 3. Variable whose type cannot be inferred correctly
 let numbers = [-10, -1, 12];
 let numberAboveZero: boolean | number = false;

 for (let i = 0; i < numbers.length; i++) {
     if(numbers[i]>0) {
         numberAboveZero = numbers[i];
     }
     
 }