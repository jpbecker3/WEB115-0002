//JS file for webpage

//declare array of objects to hold each task 
const tasks = [];

//how to get task id to increment for each added task
let taskId = 0;

//get info from form to populate into array 
document.getElementById("taskForm").addEventListener("submit",function(event){
    //the form goes away too quick and doesn't stay in console
    event.preventDefault();

    //increment task id
    taskId ++;

    //task object
    const newTask = {
        //id
        id: taskId,

        //task name
        name: document.getElementById("task").value,

        //priority
        priority: document.getElementById("priority").value,

        //isImportant?
        isImportant: document.getElementById("isImportant").checked,

        //isCompleted is false when added
        isCompleted: false,

        //date (today)
        date: new Date().toLocaleDateString(),

    };

    //append new task to the task array 
    tasks.push(newTask);

    console.log(JSON.stringify(tasks));

    //form now needs to clear to be ready for new task 
    event.target.reset();

    //call function that will display new task 
    displayTasks();

});

//output list to the div with id of taskmanager with formatting using .innerHTML
//function that will display tasks
function displayTasks(){
    //get document div where tasks will be displayed 
    const taskList = document.getElementById("taskManager");

    //make sure that when a new task is added there is no duplicate tasks
    taskList.innerHTML = "";

    tasks.forEach((task, index)=>{
        //each task gets appended to display
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        //format output style and highlight/strikethrough
        taskDiv.innerHTML = `
            <div style="
            border: 3px solid #000000;
            padding: 5px;
            margin-bottom: 5px;
            ${task.isImportant ? 'background-color: #ff3333;' : ''}
            ${task.isCompleted ? 'text-decoration: line-through; color: gray;' : ''}
            ">
            <strong>${task.name}</strong><br>
            Priority: ${task.priority}<br>
            Date: ${task.date}<br>
            <label><input type="checkbox" onchange="toggleComplete(${index})" ${task.isCompleted ? 'checked' : ''}> Completed</label>
            <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        //new task to the html doc
        taskList.appendChild(taskDiv);
    });
};

//toggle task completion checkbox
function toggleComplete(index) {
  tasks[index].isCompleted = !tasks[index].isCompleted;
  console.log(JSON.stringify(tasks));
  displayTasks();
};

// delete task when delete button clicked
function deleteTask(index) {
  tasks.splice(index, 1);
  console.log(JSON.stringify(tasks));
  displayTasks();
};



