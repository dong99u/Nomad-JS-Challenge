const form_1 = document.querySelector(".main-greeting__form:first-child");
const input_1 = document.querySelector(".main-greeting__form:first-child input");
const form_2 = document.querySelector(".main-greeting__form:nth-child(2)");
const input_2 = document.querySelector(".main-greeting__form:nth-child(2) input");
const question_1 = document.querySelector(".main-greeting__column:first-child");
const question_2 = document.querySelector(".main-greeting__column:nth-child(2)");

const HIDDEN_CLASSNAME = "main-greeting__column--hidden";


function preventSubmit(event) {
    event.preventDefault();
    const userName = input_1.value;
    console.log(userName);
    question_1.classList.toggle(HIDDEN_CLASSNAME);

}

form_1.addEventListener("submit", preventSubmit);