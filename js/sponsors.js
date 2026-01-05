function addSponsor() {

    let table = document.getElementById("sponsorTable");

    let name = prompt("Enter sponsor name:");
    let email = prompt("Enter sponsor email:");
    let contribution = prompt("Enter contribution amount:");

    if (name == "" || email == "" || contribution == "") {
        alert("All fields are required");
        return;
    }

    if (email.indexOf("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (isNaN(contribution)) {
        alert("Contribution must be a number");
        return;
    }

    let row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = "$" + contribution;
}