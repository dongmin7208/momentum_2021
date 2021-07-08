const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = document.querySelector("#todo-form");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";
//이전 정보 최신정보 바뀔수있게 let으로
let toDos = [] ;

function saveToDos(){
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}


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
    button.innerText= "👌"
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
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

}
toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item){
//    console.log("this is the turn of",item);
//}
// => console.log("this is the turn of ", item);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach((item) => console.log("e",item));
     
}