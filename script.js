// Get the input element
const dateInput = document.getElementById('date-input');
const ageDisplay = document.getElementById('age-display');

const picker = datepicker(dateInput, {
    formatter: (input, date, instance) => {
        // Format the selected date and display it in the input field
        const value = date.toLocaleDateString();
        input.value = value;

        // Calculate age based on selected date
        const age = calcAge(date);
        ageDisplay.textContent = "Age: "  + age;
    },
    startDate: new Date(),
});

// Function to calculate age from selected date
function calcAge(birthDate) {
    const DateTime = luxon.DateTime; // Get the Luxon DateTime class

    // Convert the input date to a Luxon DateTime object
    const birthDateTime = DateTime.fromJSDate(birthDate);
    const today = DateTime.local(); // Get current date

    // Calculate the difference in years
    const totalMonths = today.diff(birthDateTime, "months").months;

    const years = Math.floor(totalMonths / 12);
    const months = Math.floor(totalMonths % 12);

    return `${years} years and ${months} months`;
}