const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = document.querySelector("#todo-form");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";
//이전 정보 최신정보 바뀔수있게 let으로
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
const li = event.target.parentElement;
li.remove();
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
saveToDos();
//toDo.id스트링 li.id넘버임
// console.log(event)
// console.log(event.target)
// console.log(event.target.parentElement)
// console.dir(event.target.parentElement.innerText)
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText= "x"
    button.addEventListener("click",deleteToDo );
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    //순서
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),

    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}
toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item){
//    console.log("this is the turn of",item);
//}
// => console.log("this is the turn of ", item);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach((item) => console.log("e",item));
}
//지우고 싶은 item을 제외하고 새 array를 만든다.

function sexyFilter(){

}