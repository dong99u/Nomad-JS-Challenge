const logoutBtn = document.querySelector(".footer__container span:nth-child(2)");
const logoutSpan = document.querySelector(".footer__container span");

console.dir(logoutBtn);

const ACT_CLASSNAME = "act";

function handleLogoutBtn() {
    logoutSpan.classList.toggle(ACT_CLASSNAME);
}

logoutBtn.addEventListener("mouseover", handleLogoutBtn);
