// const loginForm = document.querySelector("#login-form");같은데 # 넣어줘야함.
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // === greeting.innerText = "Hello  " + USERNAME_KEY;
    localStorage.setItem("HIDDEN_CLASSNAME", username);
    greeting.innerText = `Hello   + ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const saveUsername = localStorage.getItem("USERNAME_KEY");

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);   
    loginForm.addEventListener("submit", onLoginSubmit);
 }else{
     greeting.innerText = `Hello ${saveUsername}`;
     greeting.classList.remove(HIDDEN_CLASSNAME);

 }