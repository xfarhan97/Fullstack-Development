const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");

taskInput.addEventListener("input", function(){
    if(taskInput.value.trim() !== ""){
        errorMessage.textContent = "";
    }
});

function addTask(){
    
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        errorMessage.textContent = "⚠ Task cannot be empty!";
        return false;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button onclick="completeTask(this)">✔</button>
            <button onclick="deleteTask(this)">✖</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
}

function completeTask(button){
    button.parentElement.parentElement.classList.toggle("completed");
}