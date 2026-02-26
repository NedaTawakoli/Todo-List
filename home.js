const parent = document.getElementById("parent");
const continerModal = document.getElementById("continer-modal");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const todoList =[];
addBtn.addEventListener("click",()=>{
    if(!continerModal.classList.contains("toggleForm")){
        continerModal.classList.add("toggleForm");
        addBtn.textContent ="Hide Form";
    }else{
        continerModal.classList.remove("toggleForm");
        addBtn.textContent="Add Todo";
    }
});
saveBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    storeTodo();
});
function storeTodo(){
   const todo = document.getElementById("todo").value;
   const importence = document.getElementById("importance").value;
   todoList.push({
    todo,
    importence
   });
 document.getElementById("todo").value = "";
 document.getElementById("importance").value = "";
   if(continerModal.classList.contains("toggleForm")){
    continerModal.classList.remove("toggleForm");
    addBtn.textContent="Add Todo";
   }
   showTodo();
}
function showTodo(){
for(let todo of todoList){
    parent.innerHTML = "";
   const div = document.createElement("div");
  const h1 = document.createElement("h1");
 const p = document.createElement("p");
  h1.textContent = todo.todo;
  div.append(h1);
  parent.append(div);
}
}