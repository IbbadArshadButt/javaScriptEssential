const prompt = require('prompt-sync')();

// let userRole = NULL;
// let accessLevel;
const multilineString =
    "Read the following and get access accordingly" +
    "\nIf the person is an Employee, they are authorized to have access to Dietary Services." +
    "\nIf the person is an Enrolled Member, they are authorized to have access to Dietary Services and one-on-one interaction with a dietician." +
    "\nIf the person is a Subscriber, they are authorized to have partial access to facilitate Dietary Services only." +
    "\nIf the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail the facility."

console.log(multilineString);

//console.log("You entered: " + userInput);

let userRole = prompt("Enter your input: ");

if(userRole === "Employee"){
    console.log("You can access the Dietary Services");
}

else if(userRole === "Enrolled Member"){
    console.log("You can access the Dietary Services and one-on-one interaction with a dietician.");
}

else if(userRole === "Subscriber"){
    console.log("You are authorized to have partial access to facilitate 'Dietary Services' only.");
}

else if(userRole === "Non-Subscriber"){
    console.log("You need to enroll or at least subscribe first to avail this facility.");
}