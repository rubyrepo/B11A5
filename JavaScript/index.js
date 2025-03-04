document.querySelectorAll('button').forEach(button => {
    button.style.cursor = 'pointer';
});







// day name showing using accronym style 
const currentDate = new Date();
const weekdayName = { weekday: 'short' };
const dayName = currentDate.toLocaleDateString('en-US', weekdayName);
document.getElementById("Weekday_accronym").innerHTML = dayName;

// date showing 
const dateFormate = { year:'numeric', month:'short', day:'numeric' }; 
const formattedDate = currentDate.toLocaleDateString('en-US', dateFormate);
document.getElementById("todayDate").innerHTML = formattedDate

// button integration 
// theme changing button
const colors = ['#fce4ec','#ffe0b2','#e3f2fd','#b3e5fc','#a5d6a7','#d0f8ce','#f1f8e9',];
function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length); // Get random index
    document.body.style.backgroundColor = colors[randomIndex]; // Apply color
  }
document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);

// reloding the page to clear history
function reloadHomePage() {
    location.reload(); // Reloads the current page
}

document.getElementById("clear_history").addEventListener('click', reloadHomePage)



// actual five function with 6 buttons
function taskBtnActivity(){
    // task 01
    let AssaignedTaskProgressVariable = parseInt(document.getElementById('AssaignedTaskProgress').innerHTML)
    AssaignedTaskProgressVariable -= 1
    document.getElementById('AssaignedTaskProgress').innerHTML = AssaignedTaskProgressVariable
    
    // task 02
    let allTask = parseInt(document.getElementById("completed_task_show").innerHTML)
    allTask += 1
    document.getElementById('completed_task_show').innerHTML = allTask

    // task 03
    alert("Task completed sucessfully ")
    // task 04
    if (parseInt(document.getElementById('AssaignedTaskProgress').innerHTML) === 0) {
        alert("💐🪻 congrates! you completed all the task");
    }
    
    
    
}

// button disabling 

function disableButtonOnClick(buttonId, divId, commentTextDiv) {
    document.getElementById(buttonId).addEventListener('click', function(event) {
        event.target.disabled = true;
        event.target.style.color = 'white';
        const btnBgColor = document.getElementById(divId)
        btnBgColor.style.backgroundColor = '#ced6ff';

        let commentDiv = document.createElement('div')
        commentDiv.style.marginBottom = '10px'
        commentDiv.style.padding = '20px'
        commentDiv.style.background = '#f4f7ff'
        commentDiv.style.borderRadius = '10px'
        commentDiv.style.fontWeight = '200'

        const commentText = document.getElementById(commentTextDiv).innerHTML
        commentDiv.textContent = "You have completed the task: " + commentText;
        let asideSectionTaskComment = document.getElementById('AsideSectionTaskComment');
        asideSectionTaskComment.appendChild(commentDiv);


    });
} 

document.getElementById('btn_task_01').addEventListener('click', taskBtnActivity)
document.getElementById('btn_task_01').addEventListener('click', disableButtonOnClick('btn_task_01','btn_task_01_div','title_comment_01'))

document.getElementById('btn_task_02').addEventListener('click', taskBtnActivity)
document.getElementById('btn_task_02').addEventListener('click', disableButtonOnClick('btn_task_02','btn_task_02_div','title_comment_02'))

document.getElementById('btn_task_03').addEventListener('click', taskBtnActivity)
document.getElementById('btn_task_03').addEventListener('click', disableButtonOnClick('btn_task_03','btn_task_03_div','title_comment_03'))

document.getElementById('btn_task_04').addEventListener('click', taskBtnActivity)
document.getElementById('btn_task_04').addEventListener('click', disableButtonOnClick('btn_task_04','btn_task_04_div','title_comment_04'))

document.getElementById('btn_task_05').addEventListener('click', taskBtnActivity)
document.getElementById('btn_task_05').addEventListener('click', disableButtonOnClick('btn_task_05','btn_task_05_div','title_comment_05'))

document.getElementById('btn_task_06').addEventListener('click', taskBtnActivity)
document.getElementById('btn_task_06').addEventListener('click', disableButtonOnClick('btn_task_06','btn_task_06_div','title_comment_06'))
