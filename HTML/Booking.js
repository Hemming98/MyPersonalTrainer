
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





