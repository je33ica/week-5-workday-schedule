$(document).ready(function(){


// get current day, date & time
//current day is shown at the top of the page

var currentHour = moment().format("H");
if (currentHour > 19){
    localStorage.clear()
}


//would like to be able for time to update- setInterval?

var dateAndTimeNow = moment().format('dddd, MMMM Do, H:mm');
    document.getElementById("currentDay").innerHTML = dateAndTimeNow;
    


// divs that need to be dynamically created

// create schedule for standard business hours - defined as 9 AM > 6 PM ( checked offical way to display AM/PM)

// hour rows
var hourSlots = ["09","10","11","12","13","14","15","16","17","18"];
//console.log(hourSlots[0].padStart(2,"0"));



// row blocks of 1 hour with columns off time/input box /save
var rows;
for ( i = 0; i < hourSlots.length; i++){
    var hour = hourSlots[i]
    var rows = $("<div>").addClass("row");
    var timeColumn = $("<p>").text(hour).addClass("hour");
    rows.attr("id",hourSlots[i])
    //had to ammend "time-block" width in CSS
    var inputColumn = $("<input id=userInput>").attr("placeholder", "Add to do here").addClass("time-block");
    var SaveColumn = $("<button>").addClass("saveBtn saveBtn i:hover").text(" save ")
    //these have been created and need to be append to an elment in the HTML to be included in the DOM
    //added a <div id="schedule" in the HTML
    $(rows).append(timeColumn).append(inputColumn).append(SaveColumn)
    $("#schedule").append(rows)

        //not relying on type co-ersion from javascript so added parseInt
        if (parseInt(hour) < currentHour){
            inputColumn.addClass("past")//.removeClass("future present");?
        }
        else if (parseInt(hour) > currentHour){
        inputColumn.addClass("future")//.removeClass("present past");?
        }
        else {
            inputColumn.addClass("present");
        }
  }



//Jquery for onClick
$(".saveBtn").on("click", function(e){
     e.preventDefault()

var task = $(this).siblings("#userInput").val(); 
 console.log(task);
 var timeBlockId = $(this).parent().attr("id")

//     //using the id to dynamically update the array of textinputs
//     var textId = parseInt(textarea.attr("id"));
//     var textIndex = textArr.findIndex((element => element.hour === textId));
//     textArr[textIndex].task = inputText;

    //save to local storage

   localStorage.setItem(timeBlockId,task)
    
 })

// //var userInput = ("hello")
// $("#userInput").val();

  

//     localStorage.setItem("userInput")
//     const data = JSON.parse(localStorage.getItem('userInput'))
//     console.log("userInput")

//     itemsArray.push(input.value)
//     localStorage.setItem("userInput")
    