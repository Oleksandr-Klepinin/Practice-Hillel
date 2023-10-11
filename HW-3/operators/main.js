// 1
function inputAndAlertName(){
    let inputName = prompt('Enter your name:');
    if (inputName) {
        let capitalizedFirstName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        alert(`Hello, ${capitalizedFirstName}! How are you?`);
    } else {
        alert('You did not enter a name.');
    }
}
inputAndAlertName();

// 2
let number = prompt('Enter a three-digit number:');

if (number.length !== 3 || isNaN(number)) {
    alert('Please enter a valid three-digit number.');
} else {
    let digit1 = parseInt(number[0]);
    let digit2 = parseInt(number[1]);
    let digit3 = parseInt(number[2]);

    if (digit1 === digit2 && digit2 === digit3) {
        alert('All numbers are the same');
    } else {
        alert('All numbers are not the same.');
    }

    if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
        alert('Among the numbers there are identical ones.');
    } else {
        alert('Among the numbers there are no identical ones.');
    }
}

// 3
const birthYear = prompt('Enter the year of birth:');

if (birthYear === null) {
    alert('It is a pity that you did not want to enter your year of birth.');
} else {
    const city = prompt('Enter the city where you live:');

    if (city === null) {
        alert('It is a pity that you did not want to enter your city.');
    } else {
        const sport = prompt('Enter your favorite sport:');

        if (sport === null) {
            alert('It is a pity that you did not want to enter your favorite sport.');
        } else {
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;

            let locationMessage;
            if (city === 'Kyiv' || city === 'Washington' || city === 'London') {
                locationMessage = `You live in the capital ${getCountry(city)}.`;
            } else {
                locationMessage = `You live in ${city}.`;
            }

            alert(`
    Your age: ${age}
    ${locationMessage}
    Your favorite sport: ${sport}
            `);
        }
    }
}

function getCountry(capital) {
    switch (capital) {
        case 'Kyiv':
            return 'of Ukraine';
        case 'Washington':
            return 'of the USA';
        case 'London':
            return 'of Great Britain';
        default:
            return "unspecified country";
    }
}
