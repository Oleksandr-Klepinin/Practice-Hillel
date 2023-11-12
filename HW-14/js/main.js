'use strict';

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();

    document.querySelector('.js--form').addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });

    document.querySelector('.js--todos-wrapper').addEventListener('change', (event) => {
        const checkbox = event.target;
        if (checkbox.type === 'checkbox') {
            const todoItem = checkbox.closest('.todo-item');
            toggleTaskStatus(checkbox, todoItem);
            saveTasks();
        }
    });

    document.querySelector('.js--todos-wrapper').addEventListener('click', (event) => {
        const deleteButton = event.target;
        if (deleteButton.classList.contains('todo-item__delete')) {
            const todoItem = deleteButton.closest('.todo-item');
            deleteTask(todoItem);
            saveTasks();
        }
    });
});

function addTask() {
    const inputValue = document.querySelector('.js--form__input').value.trim();
    if (inputValue !== '') {
        const taskList = document.querySelector('.js--todos-wrapper');
        const newTask = createTaskElement(inputValue);
        taskList.appendChild(newTask);
        saveTasks();
        document.querySelector('.js--form__input').value = '';
    }
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = createCheckbox();
    const span = createSpan(taskText);
    const deleteButton = createDeleteButton();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    return checkbox;
}

function createSpan(taskText) {
    const span = document.createElement('span');
    span.className = 'todo-item__description';
    span.textContent = taskText;
    return span;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'todo-item__delete';
    deleteButton.textContent = 'Delete';
    return deleteButton;
}

function toggleTaskStatus(checkbox, todoItem) {
    const description = todoItem.querySelector('.todo-item__description');
    const deleteButton = todoItem.querySelector('.todo-item__delete');

    if (checkbox.checked) {
        todoItem.classList.add('todo-item--checked');
        description.classList.add('todo-item__description--checked');
        deleteButton.classList.add('delete--checked');
    } else {
        todoItem.classList.remove('todo-item--checked');
        description.classList.remove('todo-item__description--checked');
        deleteButton.classList.remove('delete--checked');
    }
}

function deleteTask(todoItem) {
    todoItem.remove();
    saveTasks();
}

function saveTasks() {
    const taskList = document.querySelector('.js--todos-wrapper');
    const tasks = Array.from(taskList.querySelectorAll('.todo-item')).map((taskItem) => ({
        description: taskItem.querySelector('.todo-item__description').textContent,
        checked: taskItem.querySelector('input[type="checkbox"]').checked
    }));

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.querySelector('.js--todos-wrapper');
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach((task) => {
            const newTask = createTaskElement(task.description);
            const checkbox = newTask.querySelector('input[type="checkbox"]');
            taskList.appendChild(newTask);

            if (task.checked) {
                checkbox.checked = true;
                toggleTaskStatus(checkbox, newTask);
            }
        });
    }
}