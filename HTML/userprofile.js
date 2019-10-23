// Vi har udarbejdet en klasse som hedder "userProfile", heri har vi tildeldt nogle forskellige variabler i constructoren.

class userProfile {
    constructor(name, mail, username, password, gender, age, mobilenumber, fitnesscenter) {
        this.name = name;
        this.username = username;
        this.mail = mail;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.mobilenumber = mobilenumber;
        this.fitnesscenter = fitnesscenter;
    }
}


// Her laver vi en empty array, som skal bruges til at opbevare local storage i.

var curentLogIn = [];

if(localStorage.getItem("user") == null)

{

//Her laver vi nu en tom array, som vi kalder "Userlist", hvorfter vi laver 3 nye user profiles.

var userList = [];

// Vi anvender derefter push funktionen til at få skubbet vores objekter op i vore tomme array.

userList.push( new userProfile("Oliver", "oliverdc@live.dk", "oliver",
    "oliver123","male","19","21225007","Fitness World Søborg"));

userList.push( new userProfile("Kristoffer", "kristoffer@live.dk", "kristoffer",
    "kristoffer123", "male", "21", "123456789", "Urban Gym"));

userList.push( new userProfile("Sara", "sara@live.dk", "sara", "sara123","26",
    "67686970", "Repeat","Repeat"));

// Vi anvendder nu JSON.stringify - Dette betyder at vores userlist som er et array bliver lavet om til forskellige strings.
    var userListString = JSON.stringify(userList);
    localStorage.setItem("user", userListString);

    console.log(localStorage);
    console.log('Nu har vi gemt vores trænere');

    }else{

    // Vi laver en variable "loggedInID", hvorefter at vi bruger variablen til at hente vores "id" gemt i vores localStorage.
    // Vi anvdender JSON.parse til at konveterer vores data fra strings til objekter.
    var loggedInID = localStorage.getItem('id');
    var userList = JSON.parse(localStorage.getItem("user"));
    var currentUser = userList[loggedInID];

    // Her consolelogger vi localstorage så vi kan se oplysningerne på den bruger som er logget ind.

    console.log(currentUser);

}


//Funktionen her henter id igennem html-siden.

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

// Vi laver nu et for loop, som looper igennem passwords og usernames i vores array, hvorefter den alerter om password og username er korrekt.
// Yderemere har vil tilføjet window.location for at henvise brugeren til en ny side, hvis oplysningerne er korrekte.
    // Vi anvender nu JSON for at lave vores currentLogIn array om til en enkelt string, som så er vores enkelte bruger som er logget ind.

    for(i = 0; i < userList.length; i++) {
        if(username == userList[i].username && password == userList[i].password) {
            alert(username + " is logged in");
            window.location="oversigt.html";
            curentLogIn.push({username: username});
            document.location.href = "oversigt.html";
            var IDString = JSON.stringify(curentLogIn);
            localStorage.setItem('id', i);
            localStorage.setItem("current user", IDString);
            return
        }
    }alert("Incorrect username or password");
}
