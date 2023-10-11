function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array);


function calculateAverage(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}

const myArray = [1, 2, 'three', 4, 'five', 6];
const average = calculateAverage(myArray);
console.log(`Середнє арифметичне чисел в масиві: ${average}`);


function removeCharacters(inputString, charactersToRemove) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];

        if (!charactersToRemove.includes(char)) {
            result += char;
        }
    }

    return result;
}

const inputString = " hello world";
const charactersToRemove = ['l', 'd'];
const result = removeCharacters(inputString, charactersToRemove);
console.log(result);



