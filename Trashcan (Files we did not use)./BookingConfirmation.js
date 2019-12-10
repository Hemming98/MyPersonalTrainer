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

var bookinglist = [];


bookinglist.push( new bookingconfirmation("09/10/2019", "14:00",
    "Repeat", "Lars", "Ingrid", "Cardio"));

bookinglist.push( new bookingconfirmation("34/10/2019", "17:00",
    "Fitness World", "Kristoffer", "Sara", "Physical training"));

bookinglist.push( new bookingconfirmation("09/12/2019", "16:00",
    "Urban Gym", "Oliver", "Sara", "Cardio"));

console.log(bookinglist)

