document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ---------------------------
    // Save tasks to LocalStorage
    // ---------------------------
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.firstChild.textContent); // store only the task text
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // --------------------------------
    // Load tasks from LocalStorage
    // --------------------------------
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = ""; // clear existing list
        storedTasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');
            removeBtn.onclick = () => {
                taskList.removeChild(li);
                saveTasks(); // update LocalStorage after removal
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // ---------------------------
    // Add a new task
    // ---------------------------
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            saveTasks(); // update LocalStorage after removal
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";

        saveTasks(); // save new task to LocalStorage
    }

    // ---------------------------
    // Event listeners
    // ---------------------------
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask();
    });

    // ---------------------------
    // Load tasks when page loads
    // ---------------------------
    loadTasks();
});
