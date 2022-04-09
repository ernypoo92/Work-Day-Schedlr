// get today's formatted date
var dateToday=moment().format("ddd, MMM Do, YYYY");

var date=$("#currentDay")

// append <span> with dateToday variable inside to the date variable above
$(date).append("<span>" + dateToday + "</span>");

// on click of element with class "save-btn"
$(".save-btn").on("click", function() {
    var taskBlockText = $(this).siblings("textarea").val().trim();
    var taskBlockTime = $(this).parent().attr("id");
    localStorage.setItem(taskBlockTime, taskBlockText);
});

// retrieve data for each time block
$("#8 textarea").val(localStorage.getItem("8"));
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

// identify the hour we're currently in
var currentHour = (new Date()).getHours();


var colorCode = $(".colorcode").each(function(){
    var val = parseInt($(this).prop("id"));

    if(val > currentHour){
        $(this).addClass("future");
    }
    else if(val < currentHour){
        $(this).addClass("past");
    }
    else if(val === currentHour){
        $(this).addClass("present");
    }
});

// set an interval of every 15 minutes to refresh colors
setInterval(function () {
    colorCode();
  }, (1000 * 60) * 15);