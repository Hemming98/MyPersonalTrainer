
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

// vi laver en function som gemmer i localstorage ved hjælp af setItem

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

//Here we make sure that you have to fill out all the informations when choosing a module

function checkInformations() {
    var form_validation = true;


    if (document.getElementById('trainingType').value == "00") {

        document.getElementById("validateWorkout").innerHTML = "Please choose a workout from the menu <br/>"
        form_validation = false;

    }

    else {
        document.getElementById("validateWorkout").innerHTML = null;
    }


    if (document.getElementById('trainingType').value == "00") {

        document.getElementById("validateTimeMonthAndYear").innerHTML = "Please choose a module (time and date) <br/>"
        form_validation = false;

    }
    else {
        document.getElementById("validateTimeMonthAndYear").innerHTML = null;
    }

    if (document.getElementById('trainingType').value == "00") {

        document.getElementById("validateTime").innerHTML = "Please choose which lesson you want <br/>"
        form_validation = false;

    }
    else {document.getElementById("validateTime").innerHTML = null;
    }

    if (document.getElementById('trainingType').value == "00") {

        document.getElementById("validatePT").innerHTML = "Please choose a personal trainer <br/>"
        form_validation = false;

    }

    else {document.getElementById("validatePT").innerHTML = null;

    }

    if (form_validation) {

    }

    else {
        return false;
    }
    return(form_validation);

}




