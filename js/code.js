var i = 0;

// Check if form submission is valid


function validInfo(){
    var nameTaskBox = document.getElementById("nameTaskBox");
    var whatToDoBox = document.getElementById("whatToDoBox");
    var dateToDoBox = document.getElementById("dateToDoBox");
    var timeBox = document.getElementById("timeBox");
    var error = document.getElementById("error");
    
    nameTask = nameTaskBox.value;
    whatToDo = whatToDoBox.value;
    dateToDo = dateToDoBox.value;
    time = timeBox.value;

    error.innerText = '';
    nameTask.innerText = '';
    whatToDo.innerText = '';
    dateToDo.innerText = '';
    time.innerText = '';

    nameTaskBox.style.backgroundColor = "";
    whatToDoBox.style.backgroundColor = "";
    dateToDoBox.style.backgroundColor = "";
    timeBox.style.backgroundColor = "";


    if(nameTask.length == 0){
        nameTaskBox.style.backgroundColor = "crimson";
        error.innerText = 'You must insert task name';
        nameTask.innerText = '';
        return false;
    }

    if(nameTask.length > 20){
        nameTaskBox.style.backgroundColor = "crimson";
        error.innerText = 'Task name is up to 20 characters';
        nameTask.innerText = '';
        return false;
    }

    if(whatToDo.length == 0){
        whatToDoBox.style.backgroundColor = "crimson";
        error.innerText = 'You must insert mission';
        return false;
    }

    if(dateToDo.length == 0){
        dateToDoBox.style.backgroundColor = "crimson";
        error.innerText = 'You must insert date';
        return false;
    }

    if(time.length == 0){
        timeBox.style.backgroundColor = "crimson";
        error.innerText = 'You must insert task name';
        return false;
    }
    enterToLocal();
}

// Enter Task to the Local Storage


function enterToLocal(){
    i++;      
    task = {id: "Task" + i ,nameTask: nameTask, whatToDo: whatToDo, dateToDo: dateToDo, time: time};
    myJSON = JSON.stringify(task);
    localStorage.setItem("Task" + i, myJSON);   
    localStorage.setItem("I", i);
    id = task.id;
    createTask(id,nameTask, whatToDo, dateToDo, time);
} 


// Create Task in HTML File

    
function createTask(id,nameTask, whatToDo, dateToDo, time){
    missions = document.getElementById("missions");

// Task body

        var divBody = document.createElement('div');
        divBody.className = 'task';
              

// Name of Task

        var divHeader = document.createElement('div');
        divHeader.className = 'taskHeader';
        var taskName = document.createTextNode(nameTask); 
        divHeader.appendChild(taskName);

// Close button

        var divClose = document.createElement('div');
        divClose.className = 'close glyphicon glyphicon-remove-sign';
        divClose.addEventListener("click", closeTask);
        divClose.id = id;  



// Task mission

        var divMain = document.createElement('div');
        divMain.className = 'taskMain';
        var taskMission = document.createTextNode(whatToDo); 
        divMain.appendChild(taskMission);

// Task Time

        var divFooter = document.createElement('div');
        divFooter.className = 'taskFooter';
        var taskTime = document.createTextNode(dateToDo + " at: " + time); 
        divFooter.appendChild(taskTime);

// Create Task

        missions.appendChild(divBody).appendChild(divClose);
        divBody.appendChild(divHeader);
        divBody.appendChild(divMain);
        divBody.appendChild(divFooter);

   
}

function restoreMissionsFromStorage(){
    onloadGetI();

// onload Restore Missions

for(j=1; j<=i; j++){
    k = localStorage.getItem("Task" + j);
    taskMe = JSON.parse(k);
    console.log(taskMe + j);
    createTask(taskMe.id,taskMe.nameTask, taskMe.whatToDo, taskMe.dateToDo, taskMe.time);
    }
}


// Close Task Div

function closeTask(){
    
    this.parentNode.parentNode.removeChild(this.parentNode);
    localStorage.removeItem(this.id);
    i--;
    localStorage.setItem("I", i);
}

// Alert Id 

function alertId(){
    alert(divBody.id);
}

// Close All Tasks

function closeAllTasks(){
    
    document.getElementById("missions").innerHTML ='';
    localStorage.clear();
    i = 0;
    localStorage.setItem("I", i);

}
      
// Reset form

function resetForm(){
    var nameTaskBox = document.getElementById("nameTaskBox");
    var whatToDoBox = document.getElementById("whatToDoBox");
    var dateToDoBox = document.getElementById("dateToDoBox");
    var timeBox = document.getElementById("timeBox");
    
    nameTaskBox.value = '';
    whatToDoBox.value = '';
    dateToDoBox.value = '';
    timeBox.value = '';

    
    nameTaskBox.style.backgroundColor = "";
    whatToDoBox.style.backgroundColor = "";
    dateToDoBox.style.backgroundColor = "";
    timeBox.style.backgroundColor = "";    
}


// get Today Date


function getMinDate(){
    
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' +  dd + '/' + yyyy;
return today;
}


// get max Date


function getMaxDate(){
    
var today = new Date();
var dd = String(today.getDate() + 5).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' +  dd + '/' + yyyy;
return today;
}


