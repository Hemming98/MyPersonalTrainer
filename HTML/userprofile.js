// Vi har udarbejdet en klasse som hedder "userProfile", heri har vi tildeldt nogle forskellige variabler i constructoren.

class userProfile {
    constructor(name, mail, username, password, gender, age, mobilenumber, fitnesscenter, experience) {
        this.name = name;
        this.username = username;
        this.mail = mail;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.mobilenumber = mobilenumber;
        this.fitnesscenter = fitnesscenter;
        this.experience = experience;
    }
}


// Her laver vi en empty array, som skal bruges til at opbevare local storage i.

var currentLogIn = [];

if(localStorage.getItem("user") == null)

{

//Her laver vi nu en tom array, som vi kalder "Userlist", hvorfter vi laver 3 nye user profiles.

var userList = [];

// Vi anvender derefter push funktionen til at få skubbet vores objekter op i vore tomme array.

userList.push( new userProfile("Oliver Dahl Christiansen", "oliverdc@live.dk", "oliver",
    "oliver123","male","19","21225007","Urban Gym", "None"));

userList.push( new userProfile("Kristoffer Kristensen", "kristoffer@live.dk", "kristoffer",
    "kristoffer123", "male", "21", "123456789", "Urban Gym", "Expert"));

userList.push( new userProfile("Sara Sharef", "sara@live.dk", "sara", "sara123","female",
    "26", "21222324","Repeat", "Expert"));

// Vi anvendder nu JSON.stringify - Dette betyder at vores userlist som er et array bliver lavet om til forskellige strings.
    var userListString = JSON.stringify(userList);
    localStorage.setItem("user", userListString);

    }else{

    // Vi laver en variable "loggedInID", hvorefter at vi bruger variablen til at hente vores "id" gemt i vores localStorage.
    // Vi anvdender JSON.parse til at konveterer vores data fra strings til objekter.
    var loggedInID = localStorage.getItem('id');
    var userList = JSON.parse(localStorage.getItem("user"));
    var currentUser = userList[loggedInID];

    // Her consolelogger vi localstorage så vi kan se oplysningerne på den bruger som er logget ind.

    console.log(currentUser);
    console.log(currentLogIn);
    console.log(localStorage);
    console.log(currentUser.name);


}


//Funktionen her henter id igennem html-siden.

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

// Vi laver nu et for loop, som looper igennem passwords og usernames i vores array, hvorefter den alerter om password og username er korrekt.
// Yderemere har vil tilføjet window.location for at henvise brugeren til en ny side, hvis oplysningerne er korrekte.
// Vi anvender nu JSON for at lave vores currentLogIn array om til en enkelt string, som så er vores enkelte bruger som er logget ind.

    for (i = 0; i < userList.length; i++) {
        if (username == userList[i].username && password == userList[i].password) {
            alert(username + " is logged in");
            window.location = "oversigt.html";
            currentLogIn.push({username: username});
            document.location.href = "oversigt.html";
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('id', i);
            localStorage.setItem("CurrentUser", IDString);
            return
        }
    }
    alert("Incorrect username or password");

}

// Window.onload som loader vores personlige oplysninger på vores subsite.

/*window.onload = function myProfile() {
    document.getElementById("myProfileName").innerHTML = "Name: " + currentUser.name;
    document.getElementById("myProfileUsername").innerHTML = "Username: " + currentUser.username;
    document.getElementById("myProfileMail").innerHTML = "E-Mail: " + currentUser.mail;
    document.getElementById("myProfilePassword").innerHTML = "Password: " + currentUser.password;
    document.getElementById("myProfileGender").innerHTML = "Gender: " + currentUser.gender;
    document.getElementById("myProfileAge").innerHTML = "Age: " + currentUser.age;
    document.getElementById("myProfileMobilenumber").innerHTML = "Mobile Number: " + currentUser.mobilenumber;
    document.getElementById("myProfileFitnesscenter").innerHTML = "Fitness Center: " + currentUser.fitnesscenter;
    document.getElementById("myProfileExperience").innerHTML = "Experience: " + currentUser.experience;
}
//window.onload = function (Profile) {

   // document.getElementById("myProfile").innerHTML ="Name" + currentUser.name

//}








 /*Logut funktion for at slette Current users værdier fra local storage.
 var logout = document.getElementById("logout");
 logout.onclick = function logout(){
  = null;
 localStorage.setItem("userList", JSON.stringify(userList));
 window.location="index.html";
 }

 Placeholder og ID
 Kalder current user og den værdi vi ønsker.
  <button onclick="Profile">Show profile</button>


     function myProfile() {
            window.onload=myProfile();
            alert(" Alert inside Profile function ");



            document.getElementById("myProfileID").innerHTML ="Name" + currentUser.name;
        }

 */