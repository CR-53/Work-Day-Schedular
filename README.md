# Work-Day-Schedular
05 Third-Party APIs: Work Day Scheduler

https://cr-53.github.io/Work-Day-Schedular/Develop/index.html

![Home Page](Assets/WorkDaySchedular.png)

## Task Description
The task for this week was to create a calendar scheduler for the average work day hours of 9am - 5pm. The schedulaer had to display the current date at the top of the page using moment.js. It also had to feature timeblocks for every hour, with the background colour of each individual timeblock being determined by the current time. The functionality of the Work Day Scheduler had to allow users to type in a multi-line text area input field and save their text via clicking a corresponding button.

## HTML/CSS Layout 
I started this task by building the layout of the schedular using HTML and CSS. I tried a lot of different HTML methods including using a table and using a list, but I decided to go with using bootstrap rows & columns to create the layout of the timeblocks. I made sure to give every text area field and every save button a unique ID which I could then utilize in my javascript.

## Moment.js
Moment.js was required in order to retrieve the user's current time from their browser/machine. I first installed moment.js then tested out various different time formats via console.log. After deciding on which time formats were best suited for this task, I added the date to the top of the screen and created a variable for the current hour which would be used later in the code.

## Changing Timeblocks Background
![Current Time](Assets/CurrentTime.png)
To get the timeblocks background colour to change based on the current hour, I used the timeblocks ID which was an integer set to the same value as the timeblocks hour it represented. I think used the previously created variable for current hour and created a for loop to check the timeblocks ID against the current hour in 24 hour time. Then all that was left was to change the class of the individual timeblocks based on whether their ID was less than, greater than or equal to the current hour.

## Saving User Input
To get the users input to save when the corresponding save button was clicked, I used localStorage and created two functions; one to save the input, and one to load the input (if for example the page was refreshed). The logic to bind the buttons to their corresponding timeblocks, save the information and load the information was the most complex logic I included in this project, although I believe it turned out very nicely and saved a lot of lines of extra code. 

## Periodically Updating Page
Without refreshing the page, to ensure the date at the top of the page changed overnight and that the timeblocks background colour changed every hour, I added a new function which periodically updated the date & current hour every second. 

## License & Copyright
© Chris R, University of Adelaide Coding Bootcamp
