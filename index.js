
tasks = [];
 completed = [];

function addTask(){
    let taskInput = document.getElementById('taskInput');
    let newTask = taskInput.value.trim();

    if(newTask){
        tasks.push(newTask);
        taskInput.value = ""
    }
    displayTasks();
}

function completedInput(task){
    completed.push(task)
}

function removeTask(index){ 
    tasks.splice(index,1);
    displayTasks()
}

function removeCompleted(index){
    completed.splice(index, 1);
    displayCompleted()
}

function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        document.getElementById('heading').innerHTML = ""
        document.getElementById("list").style.backgroundColor = ""
    } else {
        document.getElementById('heading').innerHTML = "tasks"
        document.getElementById("list").style.backgroundColor = "#90bafc"
    }
        

    tasks.forEach((task, index) =>{
        let li = document.createElement("li");
        li.textContent = task;

        li.onclick = function(){
            
            completedInput(task)
            displayCompleted()
            removeTask(index);
        }
        taskList.appendChild(li);
    })
}


function displayCompleted(){

    let completedTask = document.getElementById('completedTask');
    completedTask.innerHTML = "";
    
    if (completed.length === 0) {
        document.getElementById('heading2').innerHTML = ""
        document.getElementById("list2").style.backgroundColor = ""
    } else {
        document.getElementById('heading2').innerHTML = "completed tasks"
        document.getElementById("list2").style.backgroundColor = "#90bafc"
    }

    completed.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        li.onclick = function(){
            removeCompleted(index)
        }

        completedTask.appendChild(li);
    })
}


