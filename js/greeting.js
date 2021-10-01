const form_1 = document.querySelector(".main-greeting__form");
const input_1 = document.querySelector(".main-greeting__form input");
const form_2 = document.querySelector(".main-greeting__form:nth-child(2)");
const input_2 = document.querySelector(".main-greeting__form:nth-child(2) input");
const form_3 = document.querySelector(".main-greeting__form:nth-child(3)");
const input_3 = document.querySelector(".main-greeting__form:nth-child(3) input");
const question_1 = document.querySelector(".main-greeting__column");
const question_2 = document.querySelector(".main-greeting__column:nth-child(2)");
const question_3 = document.querySelector(".main-greeting__column:nth-child(3)");

const HIDDEN_CLASSNAME = "main-greeting__column--hidden";


function handleSubmitOnInputName(event) {
    event.preventDefault();
    const userName = input_1.value;
    question_1.classList.toggle(HIDDEN_CLASSNAME);
    question_2.querySelector("h1").innerText = `What's your email, ${userName}?`;
    question_2.classList.toggle(HIDDEN_CLASSNAME);

}

function handleSubmitOnInputEmail(event) {
    event.preventDefault();
    const userEmail = input_2.value;
    question_2.classList.toggle(HIDDEN_CLASSNAME);
    question_3.classList.toggle(HIDDEN_CLASSNAME);

}


form_1.addEventListener("submit", handleSubmitOnInputName);
form_2.addEventListener("submit", handleSubmitOnInputEmail);