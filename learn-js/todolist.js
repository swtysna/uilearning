const todoList = [];

function addTodo() {
 const inputElement =   document.querySelector('inputbox');
 const name = inputElement.value;
 todoList.Push(name);
 console.log(todoList);

}