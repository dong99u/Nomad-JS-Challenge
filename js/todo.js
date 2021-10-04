const inputToDoContainer = document.querySelector(".main__input-todo-container");
const todoForm = document.querySelector(".main__input-todo-container form");
const todoInput = document.querySelector(".main__input-todo-container form input");

const todoSpan = document.querySelector(".main__todo span:nth-child(2)");
const todoContainer = document.querySelector(".main__todo-container");

const todoMenuBtn = document.querySelector(".main__todo button");


const HIDDEN = "hidden";

function handleToDoSubmit(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    paintToDo(todo);
    inputToDoContainer.classList.toggle(HIDDEN);
    todoContainer.classList.toggle(HIDDEN);

}

function paintToDo(newToDo) {
    todoSpan.innerText = newToDo;
}

function todoOpenMenu() {
    
}

todoForm.addEventListener("submit", handleToDoSubmit);
todoMenuBtn.addEventListener("click", todoOpenMenu);