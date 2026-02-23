const parent = document.getElementById("continer");
const continerModal = document.getElementById("continer-modal");
const addBtn = document.getElementById("addBtn");
const todoList=[];
addBtn.addEventListener("click",()=>{
    if(!continerModal.classList.contains("toggleForm")){
     continerModal.classList.add("toggleForm")
     addBtn.textContent = "Hide Form"
    }else{
        continerModal.classList.remove("toggleForm");
        addBtn.textContent = "Todo App"
    }
})