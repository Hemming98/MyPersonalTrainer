function myPassword() {
    var x = document.getElementById("newPassword");
    if (x.type === "password") {
        x.type = "text" ;
    } else
        x.type = "password";
}

//constructor(name, mail, username, password, gender, age, mobilenumber, fitnesscenter, experience)

var newMail = document.getElementById("newMail");
var newUser = document.getElementById("newUser");
var newPassword = document.getElementById("newPassword");
var newPhoneNumber = document.getElementById("newPhoneNumber");
var newAge = document.getElementById("newAge");
var newName = document.getElementById("newName");
var trainerOrClient = document.getElementById("trainerOrClient");
var fitnessCenter = document.getElementById("fitnessCenter");



function createUser() {
    var form_valid = true;


    var atPos = newMail.value.indexOf("@");
    var dotPos = newMail.value.lastIndexOf(".");

    if(atPos < 1 || dotPos> newMail.length-2 || dotPos<atPos) {
        document.getElementById("validationMail").innerHTML = "Please put in a valid e-mail<br/>";
        form_valid = false;
    }
    else {
        document.getElementById("validationMail").innerHTML = null;
    }




    //Punkt 4: Valider username
    if(newUser.value == null || newUser.value == "") {

        document.getElementById("validationUser").innerHTML = "You must fill in your username <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationUser").innerHTML = null;
    }


    if(newPassword.value == null || newPassword.value == "") {

        document.getElementById("validationPassword").innerHTML = "You must fill in your password <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationPassword").innerHTML = null;
    }



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


    if(newName.value == null || newName.value == "") {

        document.getElementById("validationName").innerHTML = "You must fill in your name <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationName").innerHTML = null;
    }


    if(trainerOrClient.value == "-Choose Trainer & Client-") {

        document.getElementById("validationTrainerOrClient").innerHTML = "Please fill out client or trainer <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationTrainerOrClient").innerHTML = null;
    }


    if(fitnessCenter.value == "-Choose Center-") {

        document.getElementById("validationFitnessCenter").innerHTML = "Please choose fitness center <br/>"
        form_valid = false;
    }
    else {
        document.getElementById("validationFitnessCenter").innerHTML = null;
    }


    if(form_valid) {


        // vi har lavet en function som gemmer ovenstående værdier i localstorage og  laver en alert når dette er gjort.

        var userArray = JSON.parse(localStorage.getItem("user"))
        userArray.push(new userProfile(newName.value, newMail.value, newUser.value, newPassword.value, null, newAge.value, newPhoneNumber.value, fitnessCenter.value, null))

        localStorage.setItem("user", JSON.stringify(userArray))
        /*
        localStorage.setItem("Email", newMail.value);
        localStorage.setItem("Username", newUser.value);
        localStorage.setItem("Password", newPassword.value);
        localStorage.setItem("Age", newAge.value);
        localStorage.setItem("Name", newName.value);
        localStorage.setItem("Trainer", trainerOrClient.value);
        localStorage.setItem("Fitness Center ", fitnessCenter.value);
        localStorage.setItem("Phone Number ", newPhoneNumber.value);
*/
        alert("new user has been created!");
        console.log(localStorage);

    }
    else {
        // Hvis form_valid = false, så skal dette retuneres
        return false;
    }

    // vi retunerer form_valid tilbage om den er sand eller falsk.
    return (form_valid);
}


// her har vi lavet en funktion som ved hjælp af localstorage. clear sletter vores brugerdata fra localstorage.

function deleteUser() {
    localStorage.clear();
    alert("User has been deleted!");

}

