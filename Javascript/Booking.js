//KK
//Dette er en funktion, der laver en alert ud fra de valgte værdier i "dropdown-listen" fra booking.html
function getValueFromList() {
    var trainingType = document.getElementById("trainingType").selectedOptions[0].text;
    var dateForTheWorkout = document.getElementById("timeDateMonth").selectedOptions[0].text;
    var timeOfTheWorkout = document.getElementById("timeForTraining").selectedOptions[0].text;
    var trainingTime1 = document.getElementById("personalTrainerOfTheDay").selectedOptions[0].text;

    alert("Hello" + " " + currentUser.name + " " + trainingType + ", " + dateForTheWorkout + "," + timeOfTheWorkout +", " + trainingTime1);
}
//KK
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

}
//KK
// sletter booking som er gemt i local storage - Sara

function deleteBooking () {
    localStorage.removeItem("trainingType");
    localStorage.removeItem("date");
    localStorage.removeItem("time");
    localStorage.removeItem("trainer");
    alert("Booking has been deleted!")

}
//KK
//Her sikrer vi os, at alle informationer er udfyldt, når man vælger et træningsmodul.
//Der bliver altså lavet en funktion "checkinformations()" med flere if-statements, der eftertjekker at formularen er udfyldt.
//Dertil laves en form_validation med tilhørende boolean, der giver true eller false alt efter, om vores if-statement er korrekt.

function checkInformations() {
    var form_validation = true;


    if (document.getElementById('trainingType').value == "00") {

        document.getElementById("validateWorkout").innerHTML = "Please choose a workout from the menu <br/>"
        form_validation = false;

    }

    else {
        document.getElementById("validateWorkout").innerHTML = null;
    }

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

    if (document.getElementById('personalTrainerOfTheDay').value == "00") {

        document.getElementById("validatePT").innerHTML = "Please choose a personal trainer <br/>"
        form_validation = false;

    }

    else { document.getElementById("validatePT").innerHTML = null;

    }

    //KK
    //Som nævnt tjekker vi hele processen efter med en boolean, om if-statementet er korrekt eller falsk.
    //Til sidst laves en afsluttende form_validation. Hvis den er true, så kalder den "getValueFromList()" og hvis den er falsk printes fejlmeddelelserne.


    if (form_validation) {

        getValueFromList();

    } else {

        return false;

    }

    return(form_validation);

}
//KK
//Nedenfor ses noget udkommenteret kode, som var et bud på at få implementeret endnu en klasse.

/*
class bookingModules {
    constructor(trainingType, dateForTraining, timeForTraining, trainer, currentUser) {
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



//Test


