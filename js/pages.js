// Function that runs when the entire page is loaded
window.onload = function() {
    const table = document.getElementById('table');

    if (table) {
        // Find all rows in the table body besides the header row
        const rows = table.querySelectorAll('tbody tr');


        //keeps track of the row number

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            row.onclick = function() {
                // Get the page ID from the row
                const pageId = row.getAttribute('data-page-number');

                if (pageId) {
                    // Navigate to the new page, sending the ID
                    window.location.href = "pages" + pageId + ".html";
                }
            };
        }
    }
};