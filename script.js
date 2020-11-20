
// get current day, date & time 
//current day is shown at the top of the page
var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
console.log(currentDate);
console.log(currentHour);

 //would like to be able for time to update- setInterval?
var dateAndTimeNow = moment().format('dddd, MMMM Do, h:mm:a');
    document.getElementById("currentDay").innerHTML = dateAndTimeNow;
    console.log(dateAndTimeNow);


// divs that need to be dynamically created
var timeDiv;
var toDoDiv;
var saveBtnDiv;
// create schedule for standard business hours - defined as 9 AM > 5 PM ( checked offical way to display AM/PM)

// hour rows
var hourSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM","2 PM","3 PM", "4 PM","5 PM","6 PM"];
var timeColumn;
var inputColumn;
var SaveColumn;



// row blocks of 1 hour with columns off time/input box /save

// time blocks can be clicked
//                     event added
//                     event saved in local storage 


// time blocks will need to be compared to current time |(if loop)
// and then do something - change colour
// past - 
// present 
// future

// all needs to be dynamically created in javascript


//things that are styled in CSS 
description 
time-block
row 
hour
past 
present 
future 
saveBtn 
