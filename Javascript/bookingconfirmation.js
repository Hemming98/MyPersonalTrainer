class bookingconfirmation {
    constructor(date, time, fitnessCenter, client, trainer, trainingType)   {

        this.date = date;
        this.time = time;
        this.fitnesscenter = fitnessCenter;
        this.client = client;
        this.trainer = trainer;
        this.trainingType = trainingType;
    }
}
//Vi har ikke taget højde for om nogle af variablerne er f.eks. strings.
var userOne = new bookingconfirmation("09/10/2019", "14:00",
    "Fitness World", "Lars", "Ingrid", "Cardio");

console.log(userOne);

console.log(typeof userOne.date);