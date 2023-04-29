const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 
function addTask() {
  if (inputBox.value === "") {
    alert("Please Add Task");
  } else {
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.class = "child";
    div.innerHTML = inputBox.value;
    li.appendChild(div);
    listContainer.appendChild(li);

    let edit = document.createElement("span");
    edit.innerHTML = "\u270e";
    edit.id = "edit";
    li.appendChild(edit);

    let remove = document.createElement("span1");
    remove.innerHTML = "\u00d7";
    remove.id = "delete";
    li.appendChild(remove);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.id === "edit") {
      let editedTask = prompt("Type Here");
      if (editedTask === "") {
        alert("Task Name is Empty !!!");
      } else {
        e.target.parentElement.children[0].innerHTML = editedTask;
      }
      saveData();
    } else if (e.target.id === "delete") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
