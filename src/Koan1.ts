let item: (number | null)[];
item = [1, 2, null, 4];
console.log(`type of item ${typeof item}`); // should print "object" because array is of type object in JavaScript
console.log(`type of item ${typeof item[2]}`); // should print "object" because null is of type object in JavaScript
console.log(`type of item ${typeof item[1]}`); // should print "number"
type MyFunction = (arg: string) => void;

function sayHello(func: MyFunction) {
  // TypeScript knows 'name' must be a string here
  func("World");
}

// The anonymous function is contextually typed by 'MyFunction'
sayHello((name) => {
  // 'name' is automatically inferred as 'string'
  console.log(`Hello, ${name}`);
});

let hambozo: unknown;

hambozo = [1, 2, 3];

let hambozo2: any;
hambozo2 = [1, 2, 3];

// let total1 = hambozo.reduce((a, b) => a + b); // Error: Object is of type 'unknown' and does not have a 'reduce' method.
let total2 = hambozo2.reduce((a, b) => a + b); // No Error: 'any' disables type checking.

// console.log(`total1: ${total1}`); // This line will not execute due to the error above
console.log(`total2: ${total2}`); // This will print the sum of the array elements
