// 1
function createSumFunction() {
    let sum = 0;

    return function (num) {
        sum += num;
        return sum;
    };
}

const sum = createSumFunction();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

// 2
function name(x) {
    return function(y) {
        return x * y;
    };
}

console.log(name(5)(2));

// 3
function inputNumber() {
    let userInput;
    for (let i = 0; i < 10; i++) {
        userInput = prompt('Enter a number greater than 100', '');
        if (userInput === null || userInput === "" || isNaN(userInput)) {
            console.log('You entered an incorrect value. Try again.');
            i--;
        } else if (Number(userInput) > 100) {
            console.log('Your number: ' + userInput);
            break;
        } else {
            console.log('You entered a number less than 100. Please try again.');
        }
    }
}

inputNumber();
