// Vi har lavet en array som username og password på tre forskellige brugere.

var objPeople = [
    {username: "sara",
    password: "sara123"},

    {username: "oliver",
        password: "oliver123"},

    {username: "kristoffer",
        password: "kristoffer123"}
];

// Vi har nu defineret en funktion, som henter værdierne fra vores teksfelter i index.html

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

// Vi laver nu et for loop, som looper igennem passwords og usernames i vores array, hvorefter den alerter om password og username er korrekt.
// Yderemere har vil tilføjet window.location for at henvise brugeren til en ny side, hvis oplysningerne er korrekte.

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            alert(username + " is logged in");
            window.location="oversigt.html";
            return
        }
    }alert("Incorrect username or password");

}