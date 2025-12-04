// Run after the document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Step 2: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask function
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Check if empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new <li>
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); 

        // Remove task when button clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append button to <li>, then <li> to <ul>
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Step 4: Attach event listeners
    addButton.addEventListener('click', addTask);

    // Allow adding task with Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

   
    //  addTask();  
});
