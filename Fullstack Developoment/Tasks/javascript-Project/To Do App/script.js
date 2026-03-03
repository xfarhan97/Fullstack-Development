const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");

// Add task
function addTask(){

    let taskText = taskInput.value.trim();

    if(taskText === ""){
        error.textContent = "Task cannot be empty.";
        return false;
    }

    error.textContent = "";

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button class="complete" onclick="toggleComplete(this)">✔</button>
            <button class="delete" onclick="deleteTask(this)">✖</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// Delete task
function deleteTask(button){
    button.parentElement.parentElement.remove();
}

// Mark complete
function toggleComplete(button){
    button.parentElement.parentElement.classList.toggle("completed");
}

// Press Enter to add
taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

// Real-time validation
taskInput.addEventListener("input", function(){
    if(taskInput.value.trim() !== ""){
        error.textContent = "";
    }
});