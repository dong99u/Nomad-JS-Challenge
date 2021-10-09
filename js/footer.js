const logoutBtn = document.querySelector(".footer__container span:nth-child(2)");
const logoutSpan = document.querySelector(".footer__container span");


const ACT_CLASSNAME = "act";

function showLogoutBtn() {
    logoutSpan.style.visibility = "visible";
}
function hideLogoutBtn() {
    logoutSpan.style.visibility = "hidden";
}
function logoutPage() {
    localStorage.removeItem("username");
    localStorage.removeItem("todo");
    location.reload();
}

logoutBtn.addEventListener("mouseover", showLogoutBtn);
logoutBtn.addEventListener("mouseleave", hideLogoutBtn);
logoutBtn.addEventListener("click", logoutPage);