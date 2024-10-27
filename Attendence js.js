let attendanceData = [];

// Function to add attendance
document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    // Create an attendance object
    const attendance = {
        studentName,
        studentID,
        date,
        status
    };

    // Add to the attendance data array
    attendanceData.push(attendance);
    displayAttendance();

    // Clear form
    document.getElementById('attendanceForm').reset();
});

// Function to display attendance records
function displayAttendance() {
    const tbody = document.querySelector('#attendanceTable tbody');
    tbody.innerHTML = '';

    attendanceData.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.studentName}</td>
            <td>${record.studentID}</td>
            <td>${record.date}</td>
            <td>${record.status}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editAttendance(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteAttendance(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to edit attendance
function editAttendance(index) {
    const record = attendanceData[index];

    document.getElementById('studentName').value = record.studentName;
    document.getElementById('studentID').value = record.studentID;
    document.getElementById('date').value = record.date;
    document.getElementById('status').value = record.status;

    // Remove the old record and update
    attendanceData.splice(index, 1);
}

// Function to delete attendance
function deleteAttendance(index) {
    attendanceData.splice(index, 1);
    displayAttendance();
}

// Function to search attendance
function searchAttendance() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredData = attendanceData.filter(record =>
        record.studentName.studentID.toLowerCase().includes(searchValue)
    );

        

    const tbody = document.querySelector('#attendanceTable tbody');
    tbody.innerHTML = '';

    filteredData.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.studentName}</td>
            <td>${record.studentID}</td>
            <td>${record.date}</td>
            <td>${record.status}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editAttendance(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteAttendance(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
