let number = 12345;
let numberString = number.toString();
let digits = numberString.split('');
let result1 = digits.join(' ');
console.log(result1);

function inputAndAlertName(){
    let inputName = prompt('Enter your name:');
    if (inputName) {
        let capitalizedFirstName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        alert('Your name: ' + capitalizedFirstName);
    } else {
        alert('You did not enter a name.');
    }
}
inputAndAlertName();

function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y === 0) {
        return 'Division by zero is impossible';
    }
    return x / y;
}

let num1 = parseFloat(prompt('Enter first number:'));
let num2 = parseFloat(prompt('Enter second number:'));

let choice = prompt(`
Select operation:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    `);

choice = parseInt(choice);

let result;
switch (choice) {
    case 1:
        result = add(num1, num2);
        console.log('Addition result:', result);
        break;
    case 2:
        result = subtract(num1, num2);
        console.log('Subtraction result:', result);
        break;
    case 3:
        result = multiply(num1, num2);
        console.log('Multiplication result:', result);
        break;
    case 4:
        result = divide(num1, num2);
        console.log('Division result:', result);
        break;
    default:
        console.log('Wrong choice of operation');
}
alert(`Your result: ${result}`);