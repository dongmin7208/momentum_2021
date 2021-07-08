const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = document.querySelector("#todo-form");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
const li = event.target.parentElement;
li.remove();
// console.log(event)
// console.log(event.target)
// console.log(event.target.parentElement)
// console.dir(event.target.parentElement.innerText)
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText= "❌"
    button.addEventListener("click",deleteToDo )
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    //순서
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);

}
toDoForm.addEventListener("submit", handleToDoSubmit);