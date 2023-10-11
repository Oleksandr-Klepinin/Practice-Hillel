console.log(typeof 99);
console.log(typeof 'king');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 99n);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function (){});

let input1 = prompt('First string:');
let input2 = prompt('Second string:');
let input3 = prompt('Third string:');
console.log(`Random strings:
1. ${input3}
2. ${input1}
3. ${input2}`);

let number = 12345;
let numberString = number.toString();
let digits = numberString.split('');
let result = digits.join(' ');
console.log(result);