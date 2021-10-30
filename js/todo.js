const todoButton = document.querySelector(".footer__container:nth-child(3) > span");
const todoListForm = document.querySelector(".footer__todo footer form");
const todoListInput = document.querySelector(".footer__todo footer form input");
const todoList = document.querySelector(".footer__todo-list");

let toDoArr = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDoArr));
}

function showTodoPart() {
    const todoList = document.querySelector(".footer__todo");
    todoList.classList.toggle("act");
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoListInput.value;
    todoListInput.value = "";
    const newToDoObj = {
        text: newTodo,
        ID: Date.now(),
    };

    toDoArr.push(newToDoObj);
    if (toDoArr.length <= 4) {
        paintTodo(newToDoObj);
        saveTodos();

    }
}
function paintTodo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.ID;
    const todoContent = document.createElement("span");
    todoContent.innerText = newToDoObj.text;
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt fa-sm"></i>';
    li.appendChild(todoContent);
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteTodo);
    
    // todo의 속성을 설정하는 함수.
    settingTodoCSS(deleteButton, todoContent, li);

    todoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDoArr = toDoArr.filter(toDo => toDo.ID !== parseInt(li.id));
    saveTodos();
}

function settingTodoCSS(deleteButton, todoContent, li) {
    deleteButton.style.fontSize = "1px";
    deleteButton.style.cursor = "pointer"
    todoContent.style.fontWeight = "600";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "3px 0px";
    todoContent.style.display = "block";
    deleteButton.style.display = "block";
    todoContent.style.width = "90%";
}

todoButton.addEventListener("click", showTodoPart);
todoListForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
    const parsedToDos = JSON.parse(savedTodos);
    toDoArr = parsedToDos;
    parsedToDos.forEach(element => {
        paintTodo(element);
    });
}