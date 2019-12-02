
<!-- Adding some JavaScript for Password visibility -->

function myPassword1() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text" ;
    } else
        x.type = "password";
};




// Her laver vi en empty array, som skal bruges til at opbevare local storage i.
// Vi laver også en var userList i global scope, så den kan kaldes flere steder

var currentLogIn = [];


var userList;

if(localStorage.getItem("user") == null) {

//Her laver vi nu en tom array, som vi kalder "Userlist", hvorfter vi laver 3 nye user profiles.
    // Vi har også lavert et array som hedder trainerList, til trænerne.

    userList = [];

    //var trainerList = [];//

// Vi anvender derefter push funktionen til at få skubbet vores objekter op i vore tomme array.

    userList.push( new userProfile("Oliver Dahl Christiansen", "oliverdc@live.dk", "oliver",
        "oliver123","male","19","21225007","Urban Gym", "None"));

    userList.push( new userProfile("Kristoffer Kristensen", "kristoffer@live.dk", "kristoffer",
        "kristoffer123", "male", "21", "123456789", "Urban Gym", "Expert"));

    userList.push( new userProfile("Sara Sharef", "sara@live.dk", "sara", "sara123","female",
        "26", "21222324","Repeat", "Expert"));

    userList.push( new trainer("Lars Larsen", "lars@g-mail.k", "larsen", "lars123","male",
        "30", "21222324","Repeat", "Upper body","true"));

    //console.log(trainerList);

// Vi anvendder nu JSON.stringify - Dette betyder at vores userlist som er et array bliver lavet om til forskellige strings.

    var userListString = JSON.stringify(userList);

    localStorage.setItem("user", userListString);

}else

    {

    // Vi laver en variable "loggedInID", hvorefter at vi bruger variablen til at hente vores "id" gemt i vores localStorage.
    // Vi anvdender JSON.parse til at konveterer vores data fra strings til objekter.

    var loggedInID = localStorage.getItem('id');

    userList = JSON.parse(localStorage.getItem("user"));

    var currentUser = userList[loggedInID];

    // Her consolelogger vi localstorage så vi kan se oplysningerne på den bruger som er logget ind.

    console.log(currentUser);

    console.log(localStorage);
}


//Funktionen her henter id igennem html-siden.

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


     // Her ville vi tilføje en EventListener, som gjorde at man kunne logge ind ved at trykke enter
    // I stedet for at skulle trykke på vores "login" button, Koden kan desværre ikke fungere uden der er et tomt input felt på vores HTMl site (Login.Html).

/* var input = document.getElementById("myInput");

input.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {

        event.preventDefault("myBtn").click();
    }
});



*/


if (username == userList[3].username && password == userList[3].password) {

    alert(username + " Trainer is logged in");

    window.location = "trainer.html";


}

else {

    // Vi laver nu et for loop, som looper igennem passwords og usernames i vores array, hvorefter den alerter om password og username er korrekt.
// Yderemere har vil tilføjet window.location for at henvise brugeren til en ny side, hvis oplysningerne er korrekte.
// Vi anvender nu JSON for at lave vores currentLogIn array om til en enkelt string, som så er vores enkelte bruger som er logget ind.

    for (i = 0; i < userList.length; i++) {
        if (username == userList[i].username && password == userList[i].password) {
            alert(username + " is logged in");

            window.location = "oversigt.html";

            currentLogIn.push(currentUser);

            document.location.href = "oversigt.html";

            var IDString = JSON.stringify(currentLogIn);

            localStorage.setItem('id', i);

            localStorage.setItem("CurrentUser", IDString);
            return
        }
    }
    alert("Incorrect username or password");
}

}

