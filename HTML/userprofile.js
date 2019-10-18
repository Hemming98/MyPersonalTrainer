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
//Her laver vi nu en tom array, som vi kalder "Userlist", hvorfter vi laver 3 nye user profiless.
// Vi anvender derefter push funktionen til at få skubbet vores objekter op i vore tomme array.

var userList = [];


userList.push( new userProfile("Oliver", "oliverdc@live.dk", "oliver",
    "oliver123","male","19","21225007","Fitness World Søborg"));

userList.push( new userProfile("Kristoffer", "kristoffer@live.dk", "kristoffer",
    "kristoffer123", "male", "21", "123456789", "Urban Gym"));

userList.push( new userProfile("Sara", "sara@live.dk", "sara", "sara123","26",
    "67686970", "Repeat","Repeat"));

//Vi laver en console.log for at tjekke at vi kan hente værdier i vores array.

console.log(userList);
console.log(userList[1].gender);
console.log(userList[2].fitnesscenter);

//Funktionen her henter id igennem html-siden.

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
