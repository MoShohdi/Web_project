function generateReport() {
    var start = document.getElementById('startDate').value;
    var end = document.getElementById('endDate').value;

    if (start === "" || end === "") {
        alert("Error: Please select both a Start and End date!")
        return;
    }

    // Convert text strings into Date Objects
    var date1 = new Date(start);
    var date2 = new Date(end);

    // Calculate the difference in milliseconds
    var diffInTime = date2.getTime() - date1.getTime();

    // Convert milliseconds into days
    var days = diffInTime / (1000 * 3600 * 24);
    var money_raised = days * 100;

    // check if start date is after end date
    if (days < 0) {
        alert("Error: The 'To Date' cannot be before the 'From Date'!");
        return;
    }

    alert("Report generated successfully for " + start + " to " + end);
    alert("Total Donations (based on days): " + days + " days and raised " + money_raised + "$");
}