//teams member form

var table, input1, input2, input3, input4, rIndex;
window.onload = function() {
    rIndex;
    table = document.getElementById("table");
    input2 = document.getElementById("email");
    input1 = document.getElementById("full_name");
    input3 = document.getElementById("phone");
    input4 = document.getElementById("id");
    selectedRowToInput();
}

function checkDuplicateId() {
    var id = input4.value;
    for (var i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[3].innerHTML == id) {
            alert("ID already exists");
            return true;
        }
    }
    return false;
}


// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        full_name = input1.value,
        email = input2.value,
        phone = input3.value;
    id = input4.value;

    if (email === "") {
        alert("email Connot Be Empty");
        isEmpty = true;
    } else if (full_name === "") {
        alert("name Connot Be Empty");
        isEmpty = true;
    } else if (phone === "") {
        alert("phone Connot Be Empty");
        isEmpty = true;
    } else if (id === "") {
        alert("id Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}



// display selected row data into input text
function selectedRowToInput() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            // get the seected row index
            rIndex = this.rowIndex;
            input1.value = this.cells[0].innerHTML;
            input2.value = this.cells[1].innerHTML;
            input3.value = this.cells[2].innerHTML;
            input4.value = this.cells[3].innerHTML;
        };
    }
}



// add Row
// 1. Improved Duplicate Check
function checkDuplicateId() {
    var id = input4.value;
    // We start at i = 1 to skip the header row
    for (var i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[3].innerHTML == id) {
            alert("ID already exists!");
            return true; // Found a duplicate!
        }
    }
    return false; // No duplicate found
}

// 2. Updated Add Function
function addNewRecord() {
    // Check if inputs are empty
    if (checkEmptyInput()) return;

    // Check if ID is a duplicate
    if (checkDuplicateId()) return;

    // If both are fine, add the row
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = input1.value;
    cell2.innerHTML = input2.value;
    cell3.innerHTML = input3.value;
    cell4.innerHTML = input4.value;

    selectedRowToInput(); // Refresh click listeners
}


function updateRecord() {
    if (!checkEmptyInput() && !checkDuplicateId()) {
        table.rows[rIndex].cells[0].innerHTML = input1.value;
        table.rows[rIndex].cells[1].innerHTML = input2.value;
        table.rows[rIndex].cells[2].innerHTML = input3.value;
        table.rows[rIndex].cells[3].innerHTML = input4.value;
    }
}



function deleteRecord() {
    // edge case to not delete the Table header
    if (rIndex > 0) {
        table.deleteRow(rIndex);

        // Clear input text
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
    } else {
        alert("Please select a valid team member row to delete.");
    }
}