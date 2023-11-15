'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const todosWrapper = document.querySelector(`.${todosWrapperClassName}`);
    const form = document.querySelector(`.${formClassName}`);

    loadTasks();

    form.addEventListener('submit', addTask);
    todosWrapper.addEventListener('change', handleCheckboxChange);
    todosWrapper.addEventListener('click', handleDeleteButtonClick);
});

const formClassName = 'js--form';
const todoItemClassName = 'todo-item';
const deleteButtonClassName = 'todo-item__delete';
const todosWrapperClassName = 'js--todos-wrapper';
const checkedClassName = 'todo-item--checked';
const deleteCheckedClassName = 'delete--checked';

function addTask(event) {
    event.preventDefault();
    const inputValue = document.querySelector(`.${formClassName}__input`).value.trim();

    if (inputValue !== '') {
        const taskList = document.querySelector(`.${todosWrapperClassName}`);
        const newTask = createTaskElement(inputValue);
        taskList.appendChild(newTask);
        saveTasks();
        event.target.reset();
    }
}

function createTaskElement(taskText, isChecked = false) {
    const li = document.createElement('li');
    li.className = todoItemClassName;

    const checkbox = createCheckbox(isChecked);
    const span = createSpan(taskText);
    const deleteButton = createDeleteButton();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

function createCheckbox(isChecked) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isChecked;
    checkbox.addEventListener('change', handleCheckboxChange);
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
    deleteButton.className = deleteButtonClassName;
    deleteButton.textContent = 'Delete';
    return deleteButton;
}

function handleCheckboxChange(event) {
    const checkbox = event.target;
    const todoItem = checkbox.closest(`.${todoItemClassName}`);
    toggleTaskStatus(checkbox, todoItem);
    saveTasks();
}

function handleDeleteButtonClick(event) {
    const deleteButton = event.target;
    if (deleteButton.classList.contains(deleteButtonClassName)) {
        const todoItem = deleteButton.closest(`.${todoItemClassName}`);
        todoItem.remove();
        saveTasks();
    }
}

function toggleTaskStatus(checkbox, todoItem) {
    const description = todoItem.querySelector('.todo-item__description');
    const deleteButton = todoItem.querySelector(`.${deleteButtonClassName}`);

    if (checkbox.checked) {
        todoItem.classList.add(checkedClassName);
        description.classList.add('todo-item__description--checked');
        deleteButton.classList.add(deleteCheckedClassName);
    } else {
        todoItem.classList.remove(checkedClassName);
        description.classList.remove('todo-item__description--checked');
        deleteButton.classList.remove(deleteCheckedClassName);
    }
}

function saveTasks() {
    const taskList = document.querySelector(`.${todosWrapperClassName}`);
    const tasks = Array.from(taskList.querySelectorAll(`.${todoItemClassName}`)).map((taskItem) => ({
        description: taskItem.querySelector('.todo-item__description').textContent,
        checked: taskItem.querySelector('input[type="checkbox"]').checked
    }));

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.querySelector(`.${todosWrapperClassName}`);
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach((task) => {
            const newTask = createTaskElement(task.description, task.checked);
            taskList.appendChild(newTask);
        });
    }
}