let sum1 = 0;
for (let i = 1; i <= 15; i++) {
    sum1 += i;
}
console.log('Sum of all integers from 1 to 15:', sum1);


let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log('The product of all integers from 15 to 35:', product);


let sum2 = 0;
for (let i = 1; i <= 500; i++) {
    sum2 += i;
}
const average = sum2 / 500;
console.log('Arithmetic mean of all integers from 1 to 500:', average);


let sum3 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum3 += i;
    }
}
console.log('Sum of even numbers in the range from 30 to 80:', sum3);


const size = 10;
for (let i = 1; i <= size; i++) {
    let row = '';
    for (let j = 1; j <= size; j++) {
        const product = i * j;
        row += product.toString().padStart(4, ' ');
    }
    console.log(row);
}