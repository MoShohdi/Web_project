// recurring donors form

var table, input1, input2, input3, input4, rIndex;
window.onload = function() {
    rIndex;
    table = document.getElementById("table");
    input2 = document.getElementById("email");
    input1 = document.getElementById("full_name");
    input3 = document.getElementById("monthly_donations");
    input4 = document.getElementById("donation_date");
    selectedRowToInput();
}


// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        full_name = input1.value,
        email = input2.value,
        monthly_donations = input3.value;
    donation_date = input4.value;

    if (email === "") {
        alert("email Connot Be Empty");
        isEmpty = true;
    } else if (full_name === "") {
        alert("name Connot Be Empty");
        isEmpty = true;
    } else if (monthly_donations === "") {
        alert("monthly donations Connot Be Empty");
        isEmpty = true;
    } else if (donation_date === "") {
        alert("donation date Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}



// display selected row data into input text
function selectedRowToInput() {
    var formattedAmount = input3.value + "$";
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            // get the seected row index
            rIndex = this.rowIndex;
            input1.value = this.cells[0].innerHTML;
            input2.value = this.cells[1].innerHTML;
            input3.value = formattedAmount;
            input4.value = this.cells[3].innerHTML;
        };
    }
}



// add Row
function addNewRecord() {
    // get the table by id                
    if (!checkEmptyInput()) {
        // create a new row and cells        
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3);

        var formattedAmount = input3.value + "$";

        // set the values into row cell's
        cell1.innerHTML = input1.value;
        cell2.innerHTML = input2.value;
        cell3.innerHTML = formattedAmount;
        cell4.innerHTML = input4.value;
        // call the function to set the event to the new row
        selectedRowToInput();
    }
}


function updateRecord() {
    var formattedAmount = input3.value + "$";
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = input1.value;
        table.rows[rIndex].cells[1].innerHTML = input2.value;
        table.rows[rIndex].cells[2].innerHTML = formattedAmount;
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
        alert("Please select a valid donor row to delete.");
    }
}