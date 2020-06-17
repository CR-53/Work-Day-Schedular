// Variables 
var currentDay = moment().format("dddd Do MMMM");
var currentHour = parseInt(moment().format('H'));
var timeBlocks = $(".time-block");

$("#currentDay").text(currentDay);

console.log(currentHour);

for (i = 0; i < timeBlocks.length; i++) {
    console.log(timeBlocks[i]);

    if (timeBlocks[i].id < currentHour) {
        console.log(timeBlocks[i].id + "past");
        // pastBlocks.setAttribute('id', 'past');
    }

    else if (timeBlocks[i].id == currentHour) {
       console.log(timeBlocks[i].id + "present");
    //    timeBlocks.addClass("present");
    }

    else {
        console.log(timeBlocks[i].id + "future");
        // timeBlocks.addClass("future");
    }
};

$("#save9").on("click", function() {
    var saveText9 = timeBlocks[0].value;
    localStorage.savedUserText9 = saveText9;
});

function loadSavedItems() {
    timeBlocks[0].value = window.localStorage['savedUserText9'];
}

loadSavedItems();