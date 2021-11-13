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

//Here we have a loop to generate the text areas for scheduling this loop generates an area for a 1 hour period of time and continues to do until 5 pm is reaches as designated by the hour <=17.
for (var hour = 9; hour <= 17; hour++) {
  scheduledHours.push(moment({ hour }).format("h a"));
  //Container is appended and is designated for such in the given html file.
  $('.container').append(<div class='row time-block' data-time='${hour}'>
     
           <div class='col-sm col-md-2 hour'>
             <p>${moment({hour}).format('h  a')}</p>
           </div>
      
           <div class='col-sm col-md-10 d-flex description'>
              <div class='input-group'>
                <textarea class="form-control text-area"></textarea>
                <div class='input-group-append'>
                  <button class='save-button d-flex justify-center align-center'>
                    <i class='far fa-save fa-2x save-icon'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>);
}


