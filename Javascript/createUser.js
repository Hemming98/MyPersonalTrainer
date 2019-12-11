function myPassword() {
    var x = document.getElementById("newPassword");
    if (x.type === "password") {
        x.type = "text" ;
    } else
        x.type = "password";
}


// vi laver her nogle variabler som tager værdien fra vores bruger inputs (createuser.html) via deres id tags - Sara

var newMail = document.getElementById("newMail");
var newUser = document.getElementById("newUser");
var newPassword = document.getElementById("newPassword");
var newPhoneNumber = document.getElementById("newPhoneNumber");
var newAge = document.getElementById("newAge");
var newGender = document.getElementById("newGender");
var newName = document.getElementById("newName");
var trainerOrClient = document.getElementById("trainerOrClient");
var fitnessCenter = document.getElementById("fitnessCenter");


//vi laver en funktion som gemmer vores inputs hvis formen er true, hvis den er false kommer vores fejlmeddelelser frem.

function createUser() {
    var form_valid = true;

 /*vi laver et if statement som returnerer en fejlmeddelelse hvis email ikke indeholder punktum og @ samt hvis punktum skrives før @,
ellers sættes værdien i vores paragraf tags til null og fejlmeddelesen udskrives derfor ikke (dette er også tilfældet i de følgende "else statements"  - Sara */



    var atPos = newMail.value.indexOf("@");
    var dotPos = newMail.value.lastIndexOf(".");

    if(atPos < 1 || dotPos> newMail.length-2 || dotPos<atPos) {
        document.getElementById("validationMail").innerHTML = "Please put in a valid e-mail<br/>";
        form_valid = false;
    }
    else {
        document.getElementById("validationMail").innerHTML = null;
    }




    // returnerer false hvis  brugernavn er lig null og ikke er udfyldt - Sara
    if(newUser.value == null || newUser.value == "") {

        document.getElementById("validationUser").innerHTML = "You must fill in your username <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationUser").innerHTML = null;
    }

// returnerer false hvis  password er lig null og ikke er udfyldt - Sara


    if(newPassword.value == null || newPassword.value == "") {

        document.getElementById("validationPassword").innerHTML = "You must fill in your password <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationPassword").innerHTML = null;
    }

// returnerer false hvis værdien i phonenumber ikke er et tal eller hvis der ikke er intastet nogen værdi - Sara

    if (isNaN(newPhoneNumber.value)) {
        document.getElementById("validationPhoneNumber").innerHTML = "You must put in a phonumber that only contains numbers <br/>";
        form_valid = false;
    }
    else if (newPhoneNumber.value == "") {
        document.getElementById("validationPhoneNumber").innerHTML = "It is required to enter a phonenumber"
    }
    else {
        document.getElementById("validationPhoneNumber").innerHTML = null;
    }

// returnerer false hvis værdien i age ikke er et tal eller hvis der ikke er intastet nogen værdi - Sara


    if (isNaN(newAge.value)) {
        document.getElementById("validationAge").innerHTML = "You must put in an age that only contains numbers <br/>";
        form_valid = false;
    }
    else if (newAge.value == "") {
        document.getElementById("validationPhoneNumber").innerHTML = "It is required to enter an age"
    }
    else {
        document.getElementById("validationPhoneNumber").innerHTML = null;
    }

    // returnerer false hvis værdien i gender er sat til deffault - Sara

    if(newGender.value == "-Gender-") {

        document.getElementById("validationGender").innerHTML = "Please choose gender <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationGender").innerHTML = null;
    }

// returnerer false hvis  name er lig null og ikke er udfyldt

    if(newName.value == null || newName.value == "") {

        document.getElementById("validationName").innerHTML = "You must fill in your name <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationName").innerHTML = null;
    }

// returnerer false hvis værdien i trainer er sat til deffault - Sara

    if(trainerOrClient.value == "-Choose Trainer & Client-") {

        document.getElementById("validationTrainerOrClient").innerHTML = "Please fill out client or trainer <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationTrainerOrClient").innerHTML = null;
    }

// returnerer false hvis værdien i fitness center er sat til deffault - Sara

    if(fitnessCenter.value == "-Choose Center-") {

        document.getElementById("validationFitnessCenter").innerHTML = "Please choose fitness center <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationFitnessCenter").innerHTML = null;
    }


    if(form_valid) {

        //hvis formen er valid returneres de intastede værdier - Sara
        // vi har lavet en function som gemmer ovenstående værdier i localstorage og  laver en alert når dette er gjort.


        // Her laver vi en en ny userArray som vi psuher til vores userlist.
        // Vi bruger derefter JSON.Stringify fordi alt der er gemt i local storage skal være strings, hvorefter at vores JSON.parse laver den om fra en string.

        var userArray = JSON.parse(localStorage.getItem("user"));


        userArray.push(new userProfile(newName.value, newMail.value, newUser.value, newPassword.value, newGender.value, newAge.value, newPhoneNumber.value, fitnessCenter.value, null));

        localStorage.setItem("user", JSON.stringify(userArray));
        alert("new user has been created!");

    }
    else {
        // Hvis form_valid = false, så skal dette retuneres - Sara.
        return false;
    }

    // vi retunerer form_valid tilbage om den er sand eller falsk - Sara.
    return (form_valid);
}


// her har vi lavet en funktion som ved hjælp af localstorage. clear sletter vores brugerdata fra localstorage - Sara.

function deleteUser() {
    localStorage.clear();
    alert("User has been deleted!");

}