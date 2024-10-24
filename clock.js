function updateClock() {
    // Get current date and time
    const now = new Date();

    // Time elements
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;

    // Date elements
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayNumber = now.getDate();
    const year = now.getFullYear();

    // Display the date
    const dateString = `${dayName}, ${monthName} ${dayNumber}, ${year}`;
    document.getElementById('date').textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
