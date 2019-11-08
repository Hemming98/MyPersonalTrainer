/*class bookingconfirmation {
    constructor(date, time, fitnessCenter, client, trainer, trainingType)   {

        this.date = date;
        this.time = time;
        this.fitnesscenter = fitnessCenter;
        this.client = client;
        this.trainer = trainer;
        this.trainingType = trainingType;
    }
}
//Vi har ikke taget højde for om nogle af variablerne er f.eks. strings.

var bookinglist = [];


bookinglist.push( new bookingconfirmation("09/10/2019", "14:00",
    "Repeat", "Lars", "Ingrid", "Cardio"));

bookinglist.push( new bookingconfirmation("34/10/2019", "17:00",
    "Fitness World", "Kristoffer", "Sara", "Physical training"));

bookinglist.push( new bookingconfirmation("09/12/2019", "16:00",
    "Urban Gym", "Oliver", "Sara", "Cardio"));

console.log(bookinglist)*/

//Function which alert the selected value from the "Dropdown list" and combines it with some relavant data from the userProfile?

function getValueFromList() {
    var trainingType = document.getElementById("trainingType").selectedOptions[0].text;
    var dateForTheWorkout = document.getElementById("timeDateMonth").selectedOptions[0].text;
    var timeOfTheWorkout = document.getElementById("timeForTraining").selectedOptions[0].text;
    var trainingTime1 = document.getElementById("personalTrainerOfTheDay").selectedOptions[0].text;

    alert("Hello" + " " + currentUser.name + " " + trainingType + ", " + dateForTheWorkout + "," + timeOfTheWorkout +", " + trainingTime1);
}



this.trainingTypeInput = document.getElementById("trainingType");
this.timeDateMonthInput = document.getElementById("timeDateMonth");
this.timeForTrainingInput = document.getElementById("timeForTraining");
this.personalTrainerOfTheDayInput = document.getElementById("personalTrainerOfTheDay");

function saveBooking() {

    localStorage.setItem("trainingType", trainingTypeInput.value);
    localStorage.setItem("date", timeDateMonthInput.value);
    localStorage.setItem("time", timeForTrainingInput.value);
    localStorage.setItem("trainer", personalTrainerOfTheDayInput.value);

    console.log(localStorage);
}


// sletter booking

function deleteBooking () {
    localStorage.removeItem("trainingType");
    localStorage.removeItem("date");
    localStorage.removeItem("time");
    localStorage.removeItem("trainer");
    alert("Booking has been deleted!")

}





