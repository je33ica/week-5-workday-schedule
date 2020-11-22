$(document).ready(function(){

var currentHour = moment().format("H");
if (currentHour > 19){
    localStorage.clear()
}

function timeUpdate(){
    var dateAndTimeNow = moment().format('dddd, MMMM Do, H:mm');
        document.getElementById("currentDay").innerHTML = dateAndTimeNow;
        
    }
    timeUpdate()
    var Interval = setInterval(timeUpdate,1000)
    

var hourSlots = ["09","10","11","12","13","14","15","16","17","18"];
var rows;
for ( i = 0; i < hourSlots.length; i++){
    var hour = hourSlots[i]
    var rows = $("<div>").addClass("row");
    var timeColumn = $("<p>").text(hour).addClass("hour");
    rows.attr("id",hourSlots[i])
    var inputColumn = $("<input id=userInput>").attr("placeholder", "Add to do here").addClass("time-block");
    var SaveColumn = $("<button>").addClass("saveBtn saveBtn i:hover").text(" save ")
    $(rows).append(timeColumn).append(inputColumn).append(SaveColumn)
    $("#schedule").append(rows)

        if (parseInt(hour) < currentHour){
            inputColumn.addClass("past")
        }
        else if (parseInt(hour) > currentHour){
        inputColumn.addClass("future")
        }
        else {
            inputColumn.addClass("present");
        }
  }

$(".saveBtn").on("click", function(e){
     e.preventDefault()

    var task = $(this).siblings("#userInput").val(); 
    var timeBlockId = $(this).parent().attr("id")
    localStorage.setItem(timeBlockId,task)
    
 })

 $("#09 #userInput").val(localStorage.getItem("09"))
 $("#10 #userInput").val(localStorage.getItem("10"))
 $("#11 #userInput").val(localStorage.getItem("11"))
 $("#12 #userInput").val(localStorage.getItem("12"))
 $("#13 #userInput").val(localStorage.getItem("13"))
 $("#14 #userInput").val(localStorage.getItem("14"))
 $("#15 #userInput").val(localStorage.getItem("15"))
 $("#16 #userInput").val(localStorage.getItem("16"))
 $("#17 #userInput").val(localStorage.getItem("17"))
 $("#18 #userInput").val(localStorage.getItem("18"))

 })
