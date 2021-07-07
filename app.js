// const loginForm = document.querySelector("#login-form");같은데 # 넣어줘야함.
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginBtnClick(event) {
    event.preventDefault();
console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
