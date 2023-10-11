let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr == null:
        console.log('ви скасували');
        break;
    case !numOrStr.trim():
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

// switch (isNaN(+numOrStr) || numOrStr.trim()) {
//     case true:
//         console.log('Number is Ba_NaN');
//         break;
//     case null:
//         console.log('ви скасували');
//         break;
//     case '':
//         console.log('Empty String');
//         break;
//     default:
//         console.log('OK!');
// }

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
//     console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

