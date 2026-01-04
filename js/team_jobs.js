var currentId = null;

// Move data from Card to Form
function selectMember(id) {
    currentId = id;

    // Get the name and job from the specific card ID
    var name = document.getElementById('memberName' + id).innerText;
    var job = document.getElementById('memberJob' + id).innerText;

    // Use JS to fill the form data 
    document.getElementById('selectedName').value = name;
    document.getElementById('newJobTitle').value = job;
}

// Validate and apply the change
function applyRoleChange() {
    var newTitle = document.getElementById('newJobTitle').value;

    // Check if the user selected member and or if the job title is empty
    if (currentId === null) {
        alert("Please click on a team member card first!");
        return;
    } else if (newTitle === "") {
        alert("Job title cannot be empty!");
        return;
    }

    document.getElementById('memberJob' + currentId).innerText = newTitle;

    alert("Role updated successfully for " + document.getElementById('selectedName').value);
}

// Clears form
function clearForm() {
    currentId = null;
    document.getElementById('selectedName').value = "";
    document.getElementById('newJobTitle').value = "";
}