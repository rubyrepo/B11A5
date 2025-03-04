// day name showing using accronym style 
const currentDate = new Date();
const weekdayName = { weekday: 'short' };
const dayName = currentDate.toLocaleDateString('en-US', weekdayName);
document.getElementById("Weekday_accronym").innerHTML = dayName;

// date showing 
const dateFormate = { year:'numeric', month:'short', day:'numeric' }; 
const formattedDate = currentDate.toLocaleDateString('en-US', dateFormate);
document.getElementById("todayDate").innerHTML = formattedDate
