// variables
const inputEl = document.querySelector(".inputEl");
const addButton = document.querySelector(".addToDoBtn");
const todos = document.querySelector(".todos");

// // TODO Updating our todos
//TODO Accounting for errors

// // * CRUD -create, read , delete, update

//* createTodoStore
function createTodoStore(){
  let todostore = JSON.parse(localStorage.getItem("todos"));
  if (todostore === null) {
    localStorage.setItem("todos", JSON.stringify([]));
    return todostore;
  } else {
    return todostore;
  }
}
createTodoStore();

//* Delete Todo
function deleTodo() {
  const delButtons = document.querySelectorAll(".delBtn");
  let todostore = createTodoStore();
  console.log(delButtons);
  delButtons.forEach(function (button, index) {
    button.onclick = function () {
      todostore.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todostore));
      console.log(todostore);
      displayTodo();
      location.reload();
    };
  });
}

//* create Todo
function createTodo() {
  let todostore = createTodoStore();
  const todoinputValue = inputEl.value;

  if (todoinputValue.trim().length !== 0) {
    todostore.push(todoinputValue);

    localStorage.setItem("todos", JSON.stringify(todostore));

    displayTodo();
    deleTodo();
    updateTodo();
  }else{
    alert("Your todo is empty")
    return
  }
}

// *updateTodo
function updateTodo() {
  const updateButtons = document.querySelectorAll(".updateBtn");
  let todostore = createTodoStore();

  updateButtons.forEach(function (button, index) {
    button.onclick = function () {
      const todo = this.parentElement.children[0];
      const updateTodo = prompt(`updateTODO :${todo.innerText}`);
      todostore.splice(index, 1, updateTodo);
      localStorage.setItem("todos", JSON.stringify(todostore));
      console.log(todostore);
      displayTodo();
      location.reload();
    };
  });
}

//* displayTodo
function displayTodo() {
  let todostore = createTodoStore();

  todos.innerHTML = "";

  todostore.forEach(function (todoitem, itemid) {
    const singleTodo = document.createElement("p");
    const delbtn = document.createElement("button");
    const updatebtn = document.createElement("button");

    delbtn.innerHTML = "delete";
    delbtn.className = "btn btn-danger delBtn";

    updatebtn.innerHTML = "update";
    updatebtn.className = "btn btn-warning updateBtn";

    singleTodo.innerHTML = `<span>${todoitem}</span>`;
    singleTodo.appendChild(delbtn);
    singleTodo.appendChild(updatebtn);

    delbtn.className = `btn btn-danger delBtn ${itemid} `;

    todos.appendChild(singleTodo); //inject each todo within the div of class todos.
  });
}
displayTodo();
deleTodo();
updateTodo();
// inputEl.onchange = createTodo
addButton.onclick = createTodo;
