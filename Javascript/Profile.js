// Her anvender vi window.onload som loader vores funktion når subsitet bliver loaded.
/// Vi anvender derefter document.getElementById til at hente værdierne fra vores ID på htmlsiden, og derefter indsætter værdierne fra vores currentUser.
window.onload = function myProfile() {
        document.getElementById("myProfileName").innerHTML = "Name: " + currentUser.name;
        document.getElementById("myProfileUsername").innerHTML = "Username: " + currentUser.username;
        document.getElementById("myProfileMail").innerHTML = "E-Mail: " + currentUser.mail;
        document.getElementById("myProfilePassword").innerHTML = "Password: " + currentUser.password;
        document.getElementById("myProfileGender").innerHTML = "Gender: " + currentUser.gender;
        document.getElementById("myProfileAge").innerHTML = "Age: " + currentUser.age;
        document.getElementById("myProfileMobilenumber").innerHTML = "Mobile Number: " + currentUser.mobilenumber;
        document.getElementById("myProfileFitnesscenter").innerHTML = "Fitness Center: " + currentUser.fitnesscenter;
        document.getElementById("myProfileExperience").innerHTML = "Experience: " + currentUser.experience;


        document.getElementById("bookingTrainingType").innerHTML = "Training type: " + localStorage.getItem("trainingType");
        document.getElementById("bookingDate").innerHTML = "Date: " + localStorage.getItem("date");
        document.getElementById("bookingTime").innerHTML = "Time: " + localStorage.getItem("time");
        document.getElementById("bookingTrainer").innerHTML = "Trainer: " + localStorage.getItem("trainer");
};