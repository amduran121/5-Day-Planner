//Global Variables
var scheduledHours = [];
var availableHours = {};
var m = moment();
var newDay = moment().hour(0);
var currentTime = m.hour();

//THis is the clock from moment.js. The function produces the clock in the area on the HTML with the id=currentDay. We are modifying the id=current day with the function clock.
function clock() {
    moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").html(dateString);

}
//This is setting the interval of the clock to update every 1000 miliseconds or 1 second
setInterval(clock, 1000);

//Here
for (var hour = 9; hour <= 17; hour ++) {
    scheduledHours.push(moment({hour}).format('h a'));
} 