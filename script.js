
// get current day, date & time
//current day is shown at the top of the page
var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
console.log(currentDate);
console.log(currentHour);

 //would like to be able for time to update- setInterval?
var dateAndTimeNow = moment().format('dddd, MMMM Do, H:mm');
    document.getElementById("currentDay").innerHTML = dateAndTimeNow;
    console.log(dateAndTimeNow);


// divs that need to be dynamically created
var timeDiv;
var toDoDiv;
var saveBtnDiv;
// create schedule for standard business hours - defined as 9 AM > 6 PM ( checked offical way to display AM/PM)

// hour rows
var hourSlots = ["9","10","11","12","13","14","15","16","17","18"];




// row blocks of 1 hour with columns off time/input box /save
var rows;
for ( i = 0; i < hourSlots.length; i++){
    var hour = hourSlots[i]
    var rows = $("<div>").addClass("row");
    var timeColumn = $("<div>").text(hour).addClass("hour");
    //had to ammend "time-block" width in CSS
    var inputColumn = $("<input>").attr("placeholder", "Add to do here").addClass("time-block");
    var SaveColumn = $("<button>").addClass("saveBtn saveBtn i:hover").text(" save ")
    //these have been created and need to be append to an elment in the HTML to be included in the DOM
    //added a <div id="schedule" in the HTML
    $(rows).append(timeColumn).append(inputColumn).append(SaveColumn)
    $("#schedule").append(rows)

        if (parseInt(hour) < currentHour){
            inputColumn.addClass("past")//.removeClass("future present");
        }
        else if (parseInt(hour) > currentHour){
        inputColumn.addClass("future")//.removeClass("present past");
        }
        else {
            inputColumn.addClass("present");
        }
  }


  



// time blocks can be clicked
//                     event added "input column" and "save" button is clicked
//                     event saved in local storage




// time blocks will need to be compared to current time |(if loop) and then do something - change colour- past, present, future






//things that are styled in CSS
// description
// time-block
// row
// hour
// past
// present
// future
// saveBtn
