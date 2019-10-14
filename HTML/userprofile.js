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

console.log(userOne);
