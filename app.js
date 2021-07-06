// const loginForm = document.querySelector("#login-form");같은데 # 넣어줘야함.
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
 const username = loginInput.nodeValue;
 if( username === ""){
     alert("ここにお名前を入力して下さい");
 } else if(username.length){
     alert("お名前が長いです。。")
 }
}
loginButton.addEventListener("click", onLoginBtnClick);
