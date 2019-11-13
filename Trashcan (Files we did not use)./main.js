<script>



//Here we make sure that you have to fill out all the informations when choosing a module
/*
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
        alert("HAHAHAHAHAHA");
    }

    else {
        return false;
    }
      return(form_validation);

     }
*/

</script>

<!--script>





// Her henter vi vores brugerdata ved at kalde værdien i vores idtags



this.newMail = document.getElementById("newMail");
this.newUser = document.getElementById("newUser");
this.newPassword = document.getElementById("newPassword");
this.newPhoneNumber = document.getElementById("newPhoneNumber");
this.newAge = document.getElementById("newAge");
this.newName = document.getElementById("newName");
this.trainerOrClient = document.getElementById("trainerOrClient");
this.fitnessCenter = document.getElementById("fitnessCenter");





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
        localStorage.setItem("Email", newMail.value);
        localStorage.setItem("Username", newUser.value);
        localStorage.setItem("Password", newPassword.value);
        localStorage.setItem("Age", newAge.value);
        localStorage.setItem("Name", newName.value);
        localStorage.setItem("Trainer", trainerOrClient.value);
        localStorage.setItem("Fitness Center ", fitnessCenter.value);
        localStorage.setItem("Phone Number ", newPhoneNumber.value);

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







</script-->



<!-- Adding some JavaScript for Password visibility -->
<!--script>
function myPassword() {
    var x = document.getElementById("newPassword");
    if (x.type === "password") {
        x.type = "text" ;
    } else
        x.type = "password";
}
</script-->