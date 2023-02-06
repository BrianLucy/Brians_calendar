

$(document).ready(function() {

    // display the date in the jumbotron THIS WORKS!
    const TodayIs = moment().format('MMMM Do , YYYY');
    $('#todayIs').text(TodayIs);
        // AND tHE CURRENT TIME!
    const currentTime = moment().format('LT');
    $('#currentTime').text(currentTime)
        // AND THE DAY OF THE WEEK!
    const weekDay = moment().format('dddd');
    $('#weekDay').text(weekDay)

    function updateTime (){
        document.getElementById("currentTime")
        .innerHTML = moment().format('h:mm a');
    } setInterval(updateTime, 1000);

    //get the hour of day to set colors for hour element.
    let hourEl = moment().get('hour');


    // change color of each time span element based on time of day
    $(".hour").each(function() {
        const timeIndex = parseInt($(this).attr('value'));

        //adds classes to change color from CSS based on the current time
        if (timeIndex < hourEl){
            $(this).addClass( "past" );
        }
        // upgraded color pallet to pretty gradient
        if (timeIndex === hourEl) {
            $(this).addClass( "present" );
        }
        //kinda looks like a sunset, eh?
        if (timeIndex > hourEl) {
            $(this).addClass( "future" );
        }


        });

    // ===================================================
    storageData = window.localStorage;

    const userInput1 = document.getElementById("userInput9");
    const userInput2 = document.getElementById("userInput10");
    const userInput3 = document.getElementById("userInput11");
    const userInput4 = document.getElementById("userInput12");
    const userInput5 = document.getElementById("userInput13");
    const userInput6 = document.getElementById("userInput14");
    const userInput7 = document.getElementById("userInput15");
    const userInput8 = document.getElementById("userInput16");
    const userInput9 = document.getElementById("userInput17");
    const inputs = [userInput1,userInput2,userInput3,userInput4,userInput5,userInput6,userInput7,userInput8,userInput9
    ];
    

    // pullInput();

    //go get all of the buttons to make them perform the save function
    const saveButtons = document.querySelectorAll(".saveBtn")
        saveButtons.forEach(function(save){
        //add event listeners
        
        save.addEventListener("click", function(){
            // let the input value equal the saved "value" or user input from that field.
        let inputVal = save.getAttribute("value");
        
        // console.log(inputVal);
        saveInput(inputVal);  
        })
        
    })

    function saveInput(x) {

        // let userInput = document.getElementById("userInput" + x).value;
        // console.log(x);
        let inputName = document.getElementById("userInput" + x).value;
        localStorage.setItem("userInput" + x, inputName);
        
        console.log("saved!");
        console.log(inputName)

        
    }

// I FEEL LIKE I AM VERY CLOSE BUT I AM VERY STUCK. 
// Can not get userInput to repopulate after a refresh. 

// function pullInput(i){
//     // let userInput = "userInput" + i;
//     for(i = 0 ; i < 9 ; i ++){
//         if(localStorage.getItem(userInput[i].value) === null)
//         {
//         continue;
//         }
//         else{
//             const savedItem = JSON.parse(window.localStorage.getItem(userInput.value));
//             savedItem[i].innerHTML(savedItem);
//         // userInput[i].innerHTML = localStorage.getItem(inputName);
//         }

        
//     }
// console.log(userInput[i].value);
//     }

    function checkLocalStorage(){
        // Defines a variable to store existing activities ... unsure if neccessary to define
        let existingHours = [];
        
        // If statement used to see if there are any existing activities created by the user, that were stored in local storage and if those activities are from the current date
        if(localStorage.getItem('existingHours')){
            // Gets existingHours, which is stringified, and stores it in the variable activitiesStringified
            const hoursStringified = localStorage.getItem('existingHours');
            // Transforms stringified data into an object
            existingHours = JSON.parse(hoursStringified);
            // Get date of existing data
            const existingDate = existingHours[0].date;
            // Get current date
            const currentDate = currentDateHour().date;
            // Compare current date and the date of the existing data. If they are equal, the data is used for rendering the calendar, if not the data is not used.
            if (currentDate === existingDate){
                // returns the object existingActivities, which contains any activities the user created for that date.
                return existingHours;
            }
            else{
                // This makes sure data from a previous day is not used.
                return false;
            };
        }   
            else {
                // This makes sure if there is no data, a blank array is created.
                return false;
        };
    };
    checkLocalStorage ();
    // pullInput();
    
    // console.log(userInput12);
        




});