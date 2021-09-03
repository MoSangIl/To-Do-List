const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event) {
  const li = event.target.parentNode;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
  li.remove();
}

function paintNewTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  button.innerText = "삭제";
  button.addEventListener("click", deleteTodo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  saveTodo();
  toDoInput.value = "";
  paintNewTodo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  toDos = JSON.parse(savedTodos);
  toDos.forEach(paintNewTodo);
}
