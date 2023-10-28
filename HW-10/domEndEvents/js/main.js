let textBlocks = document.querySelectorAll('.textBlock');
let changeColorButtons = document.querySelectorAll('.changeColorButton');
let previousColors = [];

changeColorButtons.forEach(function(button, index) {
    button.addEventListener('click', function () {
        let textBlock = textBlocks[index];
        if (textBlock.style.color !== 'red') {
            previousColors[index] = textBlock.style.color;
            textBlock.style.color = 'red';
        } else {
            textBlock.style.color = previousColors[index];
        }
    });
});


let tables = document.getElementsByClassName('pifagorTable');
let table = document.createElement('table');
table.setAttribute('border', '1');
let style = table.style;
style.borderCollapse = 'separate';
style.borderSpacing = '10px';
style.border = '1px solid black';
style.marginBottom = '10px';
for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    for (let j = 1; j <= 10; j++) {
        let cell = row.insertCell();
        cell.appendChild(document.createTextNode(i * j));
    }
}
if (tables.length > 0) {
    tables[0].parentNode.replaceChild(table, tables[0]);
}


let imageContainers = document.getElementsByClassName('imageContainer');
let imageContainer = imageContainers[0];
let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let randomIndex = Math.floor(Math.random() * images.length);
let randomImage = 'img/' + images[randomIndex];

let imgElement = document.createElement('img');
imgElement.src = randomImage;
imageContainer.appendChild(imgElement);