// Vi har lavet en array som username og password på tre forskellige brugere.

/*var objPeople = [
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

    for(i = 0; i < userList.length; i++) {
        if(username == userList[i].username && password == userList[i].password) {
            alert(username + " is logged in");
            window.location="oversigt.html";
            return
        }
    }alert("Incorrect username or password");

}

console.log(userList);


  localStorage.setItem("login_status", "true");

  var userList = [];


userList.push( new userProfile("Oliver", "oliverdc@live.dk", "oliver",
    "oliver123","male","19","21225007","Fitness World Søborg"));

userList.push( new userProfile("Kristoffer", "kristoffer@live.dk", "kristoffer",
    "kristoffer123", "male", "21", "123456789", "Urban Gym"));

userList.push( new userProfile("Sara", "sara@live.dk", "sara", "sara123","26",
    "67686970", "Repeat","Repeat"));

//Vi laver en console.log for at tjekke at vi kan hente værdier i vores array.

 */