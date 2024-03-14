function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value + ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  }
  
  function deleteTask(task) {
    task.parentNode.remove();
  }