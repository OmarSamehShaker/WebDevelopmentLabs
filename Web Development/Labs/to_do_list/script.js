const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.onclick = () => {
  if (!input.value) return;
  const li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = () => li.classList.toggle("completed");
  const del = document.createElement("button");
  del.textContent = "X"; 
  del.onclick = e => {  li.remove(); };
  li.appendChild(del);
  list.appendChild(li);
};
