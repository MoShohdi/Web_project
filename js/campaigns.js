function addCampaign() {
    let table = document.getElementById("campaignTable");

    let name = prompt("Enter campaign name:");
    let description = prompt("Enter campaign description:");
    let status = prompt("Enter campaign status:");

    if (name === "" || description === "" || status === "") {
        alert("All fields are required");
        return;
    }

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = description;
    row.insertCell(2).innerHTML = status;
}