// Vi har udarbejdet en klasse som hedder "userProfile", heri har vi tildeldt nogle forskellige variabler i constructoren.
// Vi har valgt at lave et sepperart dokument til Klassen.

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

// Her har vi lavet en sub-class som er nedavlet af vores superclass "Userprofile"
// Hensigten med denne sub-class er at kunne logge ind som administrativ bruger.
class trainer {
    constructor(name, mail, username, password, gender, age, mobilenumber, fitnesscenter, admin) {
        this.name = name;
        this.username = username;
        this.mail = mail;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.mobilenumber = mobilenumber;
        this.fitnesscenter = fitnesscenter;
        this.admin = admin;
    }
}


