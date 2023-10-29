// 1
let inputLink = '';

const linkInputBtn = document.querySelector('.linkInputBtn');
const redirectBtn = document.querySelector('.redirectBtn');

linkInputBtn.addEventListener('click', () => {
    inputLink = prompt('Enter the link:');
    console.log('Entered link: ', inputLink);
});

redirectBtn.addEventListener('click', () => {
    if (inputLink) {
        window.location.href = inputLink;
    } else {
        alert('First enter the link.');
    }
});

// 2
const parentContainer = document.querySelector('.parentContainer');

parentContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('childButton')) {
        const buttonText = event.target.textContent;
        alert(`The button was clicked: ${buttonText}`);
    }
});

// 3
const taskList = document.querySelector('.taskList');
const addTaskButton = document.querySelector('.addTask');
const newTaskInput = document.querySelector('.newTask');

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteTask')) {
        event.target.parentElement.remove();
    }
});

addTaskButton.addEventListener('click', () => {
    const task = newTaskInput.value;
    if (task) {
        const newTask = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteTask');
        deleteButton.textContent = 'Remove';
        newTask.textContent = task;
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        newTaskInput.value = '';
    }
});