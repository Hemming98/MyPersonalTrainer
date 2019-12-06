
//Function which alert the selected value from the "Dropdown list" and combines it with some relavant data from the userProfile?

function getValueFromList() {
    var trainingType = document.getElementById("trainingType").selectedOptions[0].text;
    var dateForTheWorkout = document.getElementById("timeDateMonth").selectedOptions[0].text;
    var timeOfTheWorkout = document.getElementById("timeForTraining").selectedOptions[0].text;
    var trainingTime1 = document.getElementById("personalTrainerOfTheDay").selectedOptions[0].text;

    alert("Hello" + " " + currentUser.name + " " + trainingType + ", " + dateForTheWorkout + "," + timeOfTheWorkout +", " + trainingTime1);
}

// vi henter værdierne fra vores id tags som ligger i booking.js - Sara

this.trainingTypeInput = document.getElementById("trainingType");
this.timeDateMonthInput = document.getElementById("timeDateMonth");
this.timeForTrainingInput = document.getElementById("timeForTraining");
this.personalTrainerOfTheDayInput = document.getElementById("personalTrainerOfTheDay");

// vi laver en function som gemmer i localstorage ved hjælp af setItem - Sara

function saveBooking() {

    localStorage.setItem("trainingType", trainingTypeInput.value);
    localStorage.setItem("date", timeDateMonthInput.value);
    localStorage.setItem("time", timeForTrainingInput.value);
    localStorage.setItem("trainer", personalTrainerOfTheDayInput.value);

    console.log(localStorage);
}

// sletter booking som er gemt i local storage - Sara

function deleteBooking () {
    localStorage.removeItem("trainingType");
    localStorage.removeItem("date");
    localStorage.removeItem("time");
    localStorage.removeItem("trainer");
    alert("Booking has been deleted!")

}

//Kristoffer
//Here we make sure that you have to fill out all the informations when choosing a module
//create a new funktion with multiple If-statements that check if the formula is correct filled out
//create a variable "form_validation" and assign the boolean to "true" to check if we come trough our if-statements.


function checkInformations() {
    var form_validation = true;

//First we check if the client has chosen a workout-type.



    if (document.getElementById('trainingType').value == "00") {

        document.getElementById("validateWorkout").innerHTML = "Please choose a workout from the menu <br/>"
        form_validation = false;

    }

    else {
        document.getElementById("validateWorkout").innerHTML = null;
    }

    //Kristoffer
    //Secondly, we check if the client has chosen a time and date for the workout. It takes 2 if-statements.
    /*To optimise this code, we would have to create time and module as "Data object" in JavaScript, but we use a string, because we have
    predefined our training module. A future update of our program will include a time and module object:
     https://www.w3schools.com/js/js_dates.asp*/

    if (document.getElementById('timeDateMonth').value == "00") {

        document.getElementById("validateTimeMonthAndYear").innerHTML = "Please choose a module (time and date) <br/>"
        form_validation = false;

    }
    else {
        document.getElementById("validateTimeMonthAndYear").innerHTML = null;
    }

    if (document.getElementById('timeForTraining').value == "00") {

        document.getElementById("validateTime").innerHTML = "Please choose which lesson you want <br/>"
        form_validation = false;

    }
    else {document.getElementById("validateTime").innerHTML = null;
    }

    //Kristoffer
    //Finally, we check if the client has chosen a personal trainer

    if (document.getElementById('personalTrainerOfTheDay').value == "00") {

        document.getElementById("validatePT").innerHTML = "Please choose a personal trainer <br/>"
        form_validation = false;

    }

    else { document.getElementById("validatePT").innerHTML = null;

    }

    //Kristoffer
    //Trough the whole process we validate if the client "passes" the if-statement or not.
    //If not form_validation = false, and then an message will be printet.
    //Here we check the form_validation. Likely if the boolean still is true.

    if (form_validation) {

        getValueFromList();

    } else {

        return false;

    }

    return(form_validation);

}

/*
class bookingModules {
    constructor(trainingType, dateForTraining, timeForTraining, trainer, client) {
        this.trainingType = trainingType;
        this.dateForTraining = dateForTraining;
        this.timeForTraining = timeForTraining;
        this.trainer = trainer;
        this.currentUser = currentUser;
    }
}

var moduleArray = [];

function createModuleObj () {

    var moduleObj = new bookingModules(
        docu
    )

    moduleArray.push(moduleObj);



}

 */




