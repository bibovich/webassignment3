// Set up a timer that runs a function every second
let timer = setInterval(function(){
    // Set the end date for the countdown timer (Dec 1, 2023 at midnight)
    let endDate = new Date("Dec 1, 2023 00:00:00").getTime();
    // Get the current date and time
    let nowDate = new Date().getTime();

    // Calculate the time difference between the end date and the current date
    let difference = endDate - nowDate;

    // Calculate the number of days, hours, minutes, and seconds remaining
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Get all elements with the "timer" class
    let timerClass = document.getElementsByClassName("timer")

    // Update the HTML content of all elements with the "timer" class
    for(let i = 0; i < timerClass.length; i++){
        timerClass[i].innerHTML= "Last chance!: " + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }
}, 1000) // The function is called every 1000 milliseconds (1 second)



function getUserData(){
    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let isValid = true;

    // Check for required fields
    if (name === "") {
        alert("Invalid name, please rewrite your name");
        isValid = false;
    }

    if (email === "") {
        alert("Invalid email, please rewrite your email");
        isValid = false;
    } else {
        // Check email format using a simple regex pattern
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email format.";
            isValid = false;
        }
    }

    // Check if everything is valid, if it is, then it will alert the message
    if (isValid) {
        alert("Thank you " + name + "! We will contact you soon!")
    }
}