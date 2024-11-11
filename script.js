// script.js
document.addEventListener("DOMContentLoaded", () => {
      loadTasks();
      showTime();
  });
  
  
  
  function addTask(taskText = null, completed = false, taskTime = null, taskDetail = null) {
      const taskInput = document.getElementById("taskInput");
      const timeInput = document.getElementById("taskTime");
      const detailInput = document.getElementById("taskDetail");
      const taskList = document.getElementById("taskList");
  
      const task = document.createElement("li");
      task.className = "task-item";
  
      const taskLabel = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = completed;
      checkbox.onchange = toggleComplete;
  
      const taskTimeSpan = document.createElement("span");
      taskTimeSpan.className = "task-time";
      taskTimeSpan.textContent = taskTime || timeInput.value;
  
      const taskDetailText = document.createElement("p");
      taskDetailText.className = "task-detail";
      taskDetailText.textContent = taskDetail || detailInput.value;
  
      taskLabel.appendChild(checkbox);
      taskLabel.appendChild(document.createTextNode(taskText || taskInput.value));
  
      const taskActions = document.createElement("div");
      taskActions.className = "task-actions";
  
      const editBtn = document.createElement("button");
      editBtn.className = "icon-btn";
      editBtn.innerHTML = "✏️";
      editBtn.onclick = () => editTask(taskLabel, taskDetailText);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "icon-btn";
      deleteBtn.innerHTML = "🗑️";
      deleteBtn.onclick = () => deleteTask(task);
  
      taskActions.appendChild(editBtn);
      taskActions.appendChild(deleteBtn);
  
      task.appendChild(taskTimeSpan);
      task.appendChild(taskLabel);
      task.appendChild(taskDetailText);
      task.appendChild(taskActions);
      taskList.appendChild(task);
  
      if (completed) task.classList.add("completed");
  
      taskInput.value = "";
      timeInput.value = "";
      detailInput.value = "";
  }
  
  function toggleComplete(event) {
      const taskItem = event.target.closest(".task-item");
      taskItem.classList.toggle("completed");
  }
  
  function editTask(taskLabel, taskDetailText) {
      const newTaskText = prompt("Görevi düzenleyin:", taskLabel.innerText);
      const newTaskDetail = prompt("Görev detayını düzenleyin:", taskDetailText.innerText);
      if (newTaskText) taskLabel.childNodes[1].nodeValue = newTaskText;
      if (newTaskDetail) taskDetailText.innerText = newTaskDetail;
  }
  
  function deleteTask(task) {
      task.remove();
  }
  
  function resetTasks() {
      document.getElementById("taskList").innerHTML = "";
      loadTasks();
  }
  
  function showTime() {
      const timeDisplay = document.getElementById("timeDisplay");
      setInterval(() => {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;
      }, 1000);
  }
  