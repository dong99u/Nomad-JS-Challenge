const inputToDoContainer = document.querySelector(".main__input-todo-container");
const todoForm = document.querySelector(".main__input-todo-container form");
const todoInput = document.querySelector(".main__input-todo-container form input");

const todoSpan = document.querySelector(".main__todo span:nth-child(2)");
const todoContainer = document.querySelector(".main__todo-container");


const todoMenu = document.querySelector(".main__menu");
const todoMenuBtn = document.querySelector(".main__todo button");

const todoClearBtn = document.querySelector(".main__menu ul li:nth-child(2)");
const todoEditBtn = document.querySelector(".main__menu ul li");

const TODO_KEY = "todo"
const HIDDEN = "hidden";

function handleToDoSubmit(event) {
    event.preventDefault();
    const todo = todoInput.value;
    localStorage.setItem(TODO_KEY, todo);
    todoInput.value = "";
    paintToDo(todo);
    todoToggle();
}
function todoToggle() {
    inputToDoContainer.classList.toggle(HIDDEN);
    todoContainer.classList.toggle(HIDDEN);
}

function paintToDo(newToDo) {
    todoSpan.innerText = newToDo;
}

function todoOpenMenu() {
    todoMenu.classList.toggle(HIDDEN);
}
function clearToDo() {
    localStorage.removeItem(TODO_KEY)
    todoToggle();
}
function editToDo() {
    todoToggle();
    todoInput.value = localStorage.getItem(TODO_KEY);
}

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo) {
    paintToDo(savedToDo);
    todoToggle();
}

todoForm.addEventListener("submit", handleToDoSubmit);
todoMenuBtn.addEventListener("click", todoOpenMenu);
todoClearBtn.addEventListener("click", clearToDo);
todoEditBtn.addEventListener("click", editToDo);