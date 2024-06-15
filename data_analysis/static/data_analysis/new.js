document.addEventListener('DOMContentLoaded', function () {
    const csvFilePath = '/static/data/2016-2023dataa.csv'; // Adjust the path according to your project structure

    const roundSelect = document.getElementById('round');
    const instituteTypeSelect = document.getElementById('institute-type');
    const instituteNameSelect = document.getElementById('institute-name');
    const academicProgramSelect = document.getElementById('academic-program');
    const seatTypeSelect = document.getElementById('seat-type');
    const rankForm = document.getElementById('rankForm'); // Form element

    // Event listener for form submission
    rankForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Fetch selected values from form
        const roundNo = roundSelect.value;
        const instituteType = instituteTypeSelect.value;
        const instituteName = instituteNameSelect.value;
        const academicProgram = academicProgramSelect.value;
        const seatType = seatTypeSelect.value;

        // Example: Fetch and display data using fetch API
        fetch('/api/opening_closing_ranks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                round: roundNo,
                institute_type: instituteType,
                institute_name: instituteName,
                academic_program: academicProgram,
                seat_type: seatType,
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Example: Update DOM with fetched data
            console.log(data); // Log fetched data for debugging
            // Update HTML elements dynamically based on fetched data
            // Example: Update a div with id="chart" with D3.js or plain JavaScript
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error, show error message, etc.
        });
    });

    // Function to fetch CSV data and populate select options
    function populateSelectOptions(csvData, columnName, selectElement) {
        const options = Array.from(new Set(csvData.map(d => d[columnName])));
        selectElement.innerHTML = '<option>Select an Option</option>'; // Reset options
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            selectElement.appendChild(optionElement);
        });
    }

    // Fetch CSV data and populate select options
    d3.csv(csvFilePath).then(function (data) {
        populateSelectOptions(data, 'Round No', roundSelect);
        populateSelectOptions(data, 'Institute Type', instituteTypeSelect);
        populateSelectOptions(data, 'Institute Name', instituteNameSelect);
        populateSelectOptions(data, 'Academic Program', academicProgramSelect);
        populateSelectOptions(data, 'Seat Type', seatTypeSelect);
    }).catch(function (error) {
        console.error('Error loading CSV file:', error);
    });
});
