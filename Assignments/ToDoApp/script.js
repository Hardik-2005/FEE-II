let tasks = [];

// Add a new task
function addTask() {
    const title = document.getElementById("task-title").value;
    const desc = document.getElementById("task-desc").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;

    if (title && desc) {
        const task = {
            id: Date.now(),
            title,
            desc,
            date,
            priority
        };

        tasks.push(task);
        document.getElementById("task-title").value = "";
        document.getElementById("task-desc").value = "";
        document.getElementById("task-date").value = "";
        document.getElementById("task-priority").value = "low";
        displayTasks(tasks);
    } else {
        alert("Please enter both a title and a description.");
    }
}

// Display tasks based on filters
function displayTasks(taskList) {
    const taskListContainer = document.getElementById("task-list");
    taskListContainer.innerHTML = "";

    taskList.forEach(task => {
        const listItem = document.createElement("li");
        
        listItem.innerHTML = `
            <span class="task-title">${task.title}</span>
            <span class="task-desc">${task.desc}</span>
            ${task.date ? `<span class="task-date">Due: ${task.date}</span>` : ""}
            <span class="task-priority ${task.priority}">${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        
        taskListContainer.appendChild(listItem);
    });
}

// Filter tasks by priority
function filterTasks(priority) {
    if (priority === "all") {
        displayTasks(tasks);
    } else {
        const filteredTasks = tasks.filter(task => task.priority === priority);
        displayTasks(filteredTasks);
    }
}

// Delete a task by ID
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks(tasks);
}
