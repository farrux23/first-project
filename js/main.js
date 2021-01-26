let taskTitleArray = [];
let doneTaskTitleArray = [];


const getValueOfInput = () => {
    if (document.getElementById('input').value.length > 0){
    let taskTitle = document.getElementById('input').value;

    taskTitleArray.push(taskTitle);

    document.getElementById('input').value = "";
        document.getElementById('error').style.display="none";
    drawTask();

    } else {
        document.getElementById('error').innerHTML="Oops! Something went wrong, Write your tasks, please!!! "
    }
};


const getValueOfMustDo = (index) => {

    doneTaskTitleArray.push(taskTitleArray[index]);

    taskTitleArray.splice(index, 1);

    drawTask();
};


const drawTask = () => {

    let taskContent = "";
    for (let i = 0; i < taskTitleArray.length; i++) {

        taskContent +=
            "<div class='task pl-2 d-flex justify-content-between align-items-center'><p id='task-title'>" + taskTitleArray[i] + "</p>" +
            "<button type='button' id='check-button"+ i +"' onclick='getValueOfMustDo("+ i +")' class='btn btn-success shadow-none'>&check;</button>" +
            "</div>"
    }
    document.getElementById('task-content-must-do').innerHTML = taskContent;


    let doneContent = "";
    for (let i = 0; i < doneTaskTitleArray.length; i++) {

        doneContent +=
            "<div class='task pl-2 d-flex justify-content-between align-items-center'><p>" + doneTaskTitleArray[i] + "</p>" +
            "<button type='button' id='x-button"+ i +"' onclick='clearTask("+ i +")' class='btn btn-danger shadow-none'>&times;</button>" +
            "</div>"
    }
    document.getElementById('task-content-done').innerHTML = doneContent;
    document.getElementById('progress').style.width = doneTaskTitleArray.length *100/ (doneTaskTitleArray.length + taskTitleArray.length) + "%";
    document.getElementById('progress').innerHTML = doneTaskTitleArray.length *100/ (doneTaskTitleArray.length + taskTitleArray.length) + "%";

};

const clearTask = (index) =>{
    doneTaskTitleArray.splice(index, 1);
    drawTask();
};



