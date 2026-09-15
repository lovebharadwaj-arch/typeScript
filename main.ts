console.log("Hello, TypeScript!");

const greeting: string = "Hello, GeeksforGeeks!";
console.log(greeting);

let num1: number = 10;
let num2: number = 20;

let sum: number = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

var isEven: boolean = sum % 2 === 0;
if (isEven) {
    console.log(`${sum} is an even number.`);
} else {
    console.log(`${sum} is an odd number.`);
}

function multiply(a: number, b: number): number {
    return a * b;
}

const product: number = multiply(num1, num2);
console.log(`The product of ${num1} and ${num2} is: ${product}`);