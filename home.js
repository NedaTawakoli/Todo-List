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
    parent.innerHTML = "";
    storeTodo();
      showTodo();
});
function storeTodo(){
   const todo = document.getElementById("todo").value;
   const importence = document.getElementById("importance").value;
   todoList.push({
    todo,
    importence,
    compaleted:false,
   });
 document.getElementById("todo").value = "";
 document.getElementById("importance").value = "";
   if(continerModal.classList.contains("toggleForm")){
    continerModal.classList.remove("toggleForm");
    addBtn.textContent="Add Todo";
   }
 
}
function showTodo(){
   const sortedList = todoList.sort((a,b)=>a.compaleted-b.compaleted);
for(let todo of sortedList){
   const div = document.createElement("div");
   div.addEventListener("click",()=>{
   todo.compaleted = !todo.compaleted;
   parent.innerHTML = "";
   showTodo();
   });
   div.classList.add('box');
  const h1 = document.createElement("h1");
  h1.style.color = "cadetblue";
 const p = document.createElement("p");
  h1.textContent = todo.todo;
 const smallBox = document.createElement('div');
 smallBox.classList.add('circle');
 if(todo.importence==="importent"){
    smallBox.classList.add('red');
 }else if(todo.importence ==="optional"){
    smallBox.classList.add('yellow');
 }
 else{
    smallBox.classList.add('green');
 }
 if(todo.compaleted){
    h1.style.textDecoration = "line-through";
 }
  div.append(h1,smallBox);
  parent.append(div);
}
}