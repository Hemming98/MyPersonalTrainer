// Vi har udarbejdet en klasse som hedder "userProfile", heri har vi tildeldt nogle forskellige variabler i constructoren.

class userProfile {
    constructor(name, mail, password, gender, age, mobilenumber, fitnesscenter) {
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.mobilenumber = mobilenumber;
        this.fitnesscenter = fitnesscenter;
    }
}
//Vi har nu laver et eksempel igennem "userOne", hvor udfyldt et eksempel på en bruger.

var userOne = new userProfile("Oliver", "oliverdc@live.dk", "kagemand123",
    "male",19,"21225007","Fitness World Søborg");
console.log(userOne)


function getInfo() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var fitnesscenter = document.getElementById("fitnesscenter").value;

    for(i = 0; 1 < objUsers.length; i++){
        if(username == objUsers) {}}
}