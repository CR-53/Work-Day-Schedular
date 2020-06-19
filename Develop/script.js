// Constants
const SAVE_ID_PREFIX = "save";

// Variables 
var currentDay = moment().format("dddd Do MMMM");
var currentHour = parseInt(moment().format('H'));
var timeBlocks = $(".time-block");
var saveButtons = $(".saveBtn");

// Functions

// Changes background colour of time blocks based on current time
function updateTimeBlocks() {
    for (i = 0; i < timeBlocks.length; i++) {

        if (timeBlocks[i].id < currentHour) {
            $(timeBlocks[i]).attr("class" , "time-block past");
        }

        else if (timeBlocks[i].id == currentHour) {
            $(timeBlocks[i]).attr("class" , "time-block present");
        }

        else {
            $(timeBlocks[i]).attr("class" , "time-block future");
        }
    };
};

// Loads saved text inside time blocks
function loadSavedItems() {
    for (i = 0; i < timeBlocks.length; i++) {
        // Only gets the saved values inside of local storage if a saved value exists
        if (localStorage[SAVE_ID_PREFIX + timeBlocks[i].id]) {
            timeBlocks[i].value = localStorage[SAVE_ID_PREFIX + timeBlocks[i].id];
        }
    }
}

// Binds function to all save buttons
function bindSaveButtons() {
    // Saves text inside text area HTML element to the local storage when save button is clicked
    $(saveButtons).on("click", function () {
        // Get the id of the button clicked
        var saveID = this.id;
        // Extract the numbers from the saveID
        var idNumber = saveID.slice(SAVE_ID_PREFIX.length, saveID.length);
        // Get the user input of the corresponding text area
        var timeBlockText = $("#" + idNumber).val();
        // Save the user input to local storage
        localStorage[saveID] = timeBlockText;
    });
}

// Periodically checks the current time and updates timeblocks accordingly
function beginPeriodicUpdates() {
    interval = setInterval(function () {
        // Changes the current day / date
        currentDay = moment().format("dddd Do MMMM");
        // Changes the current hour
        currentHour = parseInt(moment().format('H'));
        // Displays the current day / date on the screen
        $("#currentDay").text(currentDay);
        updateTimeBlocks();
    }, 1000); //1000 ms = 1 seconds which is the interval between the function execution
}

bindSaveButtons();
loadSavedItems();

/* Updates day/date & timeblocks on first page load.
    Makes it appear immediately when loading the page,
    rather than waiting for it to be called inside beginPeriodicUpdates() */
$("#currentDay").text(currentDay);
updateTimeBlocks();

beginPeriodicUpdates();

