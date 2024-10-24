// Update the current time, date, and day
function updateTime() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, set to 12

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').innerText = timeString;

    // Date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').innerText = dateString;

    // Day
    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('day').innerText = dayString;
}

// Set temperature (static for now)
function updateTemperature() {
    const temperature = "25°C";  // Static temperature value
    document.getElementById('temperature').innerText = temperature;
}

// Initialize the time and temperature
setInterval(updateTime, 1000);  // Update time every second
updateTemperature();  // Set temperature on page load
