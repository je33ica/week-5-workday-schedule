//   for (i = 0; i < 9; i++) {
//     var rowBlock = $(‘<div>’).addClass(‘row’);
//     var timeBlock = $(‘<div>’).addClass(‘hour col-md-2’).text(moment(‘9:00 AM’, ‘hh:mm A’).add(i, ‘hours’).format(‘hA’));
//     timeBlock.attr(‘data-time’, moment(‘9:00 AM’, ‘hh:mm A’).add(i, ‘hours’).format(‘hA’));
//     var taskBlock = $(‘<textarea>’).addClass(‘col-md-9’);
//     var saveButton = $(‘<button>’).addClass(‘saveBtn col-md-1’).html(‘<i class=“fas fa-save”></i>’);

//   var timeColumn = `${i}:00`;
//         //hour.text(timeText);
//         console.log(timeColumn);



  //  var timeText = `${i}:00`;
        //hourSlots.text(timeText);


// $("button").on("click", function() {
    //this will be an actual refernce i=of the elemetnt of the button clicked
    //</textarea>
//     var person = $(this).attr("data-person");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       person + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//       url: queryURL,
//       method: "GET"


//     let userInput = userText

//         localStorage.setItem(userText , JSON.stringify(userInput)); 
   
    
    
//     console.log(JSON.parse(localStorage.getItem(userText)));
// }
//     var inputColumn = 
//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = $(this).val();
//        localStorage.setItem(id, value);

//     });   
// });

// $('#load').click(function(){
//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = localStorage.getItem(id);

//         $(this).val(value);

//     }); 
// });



// var input = document.getElementById('').value;
// localStorage.setItem('server', input);
// document.getElementById('saveServer').value = localStorage.getItem('server');
function timeUpdate(){
    var


}
timeUpdate()
var Interval = setInterval(timeUpdate,1000)


function timeUpdate(){
    var dateAndTimeNow = moment().format('dddd, MMMM Do, H:mm');
        document.getElementById("currentDay").innerHTML = dateAndTimeNow;
        
    }
    timeUpdate()
    var Interval = setInterval(timeUpdate,1000)




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