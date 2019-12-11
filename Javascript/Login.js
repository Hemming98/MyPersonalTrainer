
//Her har vi lavet en funktion, som kan henholdsvis Hide/Show passwoed.

function myPassword1() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text" ;
    } else
        x.type = "password";
};

// Her har vi lavet en funktion som slette CurrentUser fra localStorage, når man logger ud.

function logout() {
    localStorage.removeItem("CurrentUser");
    alert("User has logged out");
}


// Her laver vi en empty array, som skal bruges til at opbevare local storage i.
// Vi laver også en var userList i global scope, så den kan kaldes flere steder

var currentLogIn = [];

//Her laver vi nu en tom array, som vi kalder "Userlist", hvorfter vi laver 3 nye user profiles og en trainer profile.

var userList = [];

console.log(userList);

// Vi har også lavert et array som hedder trainerList, til trænerne - det er dog ikke blevet implementeret endnu.

var trainerList = [];

console.log(trainerList);

//Her har vi udarbejdet et if statement, som som er true hvis vores "user" key i localStorage er tom.

if(localStorage.getItem("user") == null) {




// Vi anvender derefter push funktionen til at få pushed vores objekter i vores tomme userList array.

    userList.push( new userProfile("Oliver Dahl Christiansen", "oliverdc@live.dk", "oliver",
        "oliver123","male","19","21225007","Urban Gym", "None"));

    userList.push( new userProfile("Kristoffer Kristensen", "kristoffer@live.dk", "kristoffer",
        "kristoffer123", "male", "21", "123456789", "Urban Gym", "Expert"));

    userList.push( new userProfile("Sara Sharef", "sara@live.dk", "sara", "sara123","female",
        "26", "21222324","Repeat", "Expert"));

    userList.push( new trainer("Lars Larsen", "lars@g-mail.k", "larsen", "lars123","male",
        "30", "21222324","Repeat", "Upper body","true"));



// Vi anvendder nu JSON.stringify - Dette betyder at vores userlist som er et array bliver lavet om til forskellige strings.

    var userListString = JSON.stringify(userList);

    localStorage.setItem("user", userListString);

}else

    {

    // Vi laver en variable "loggedInID", hvorefter at vi bruger variablen til at hente vores "id" gemt i vores localStorage.
    // Vi anvdender JSON.parse til at konveterer vores data fra strings til objekter.
        // "id" er hvilket nummer objektet har i vores localStorage.

    var loggedInID = localStorage.getItem('id');

    userList = JSON.parse(localStorage.getItem("user"));

    var currentUser = userList[loggedInID];

    // Her consolelogger vi localstorage så vi kan se oplysningerne på den bruger som er logget ind, samt resten af brugerne i systemet.

    console.log(currentUser);

    console.log(localStorage);
}


//Funktionen her henter id igennem html-siden.

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


     // Her ville vi tilføje en EventListener, som gjorde at man kunne logge ind ved at trykke enter
    // I stedet for at skulle trykke på vores "login" button, Koden kan desværre ikke fungere uden der er et tomt input felt på vores HTMl site (Login.Html).
/*
 var input = document.getElementById("myInput");

input.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {

        event.preventDefault("myBtn").click();
    }
});

// Dette var forsøg nummer 2. på at implementere EventListener
    // var input1 = document.getElementById("username");

    var input2 = document.getElementById("password");
    input1.addEventListener("keyup", function(event) {

        if (event.key === 13) {
            document.getElementById("enter").click();
        }

        input2.addEventListener("submit", function(event) {

            if (event.key === 13) {

                document.getElementById("enter").click();
            }
        });
*/

// Her i den første del af vores if statement, tjekker vi kun for brugere nummer 3. i vores userList array.
    // Årsagen til dette er fordi, at det er den eneste administrative bruger i systemet på det nuværende tidspunkt - udbybes i rapporten.

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

            var IDString = JSON.stringify(currentLogIn);

            localStorage.setItem('id', i);

            localStorage.setItem("CurrentUser", IDString);
            return
        }
    }
    alert("Incorrect username or password");
}

}

