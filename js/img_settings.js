window.onload = function() {
    const table = document.getElementById('table');
    if (table) {
        const rows = table.querySelectorAll('tbody tr');
        // sellect row and numbers each row
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            //makes the row clickable and links each row to data-img-number
            row.onclick = function() {
                const imgID = row.getAttribute('data-img-number');
                if (imgID) {
                    window.location.href = "img" + imgID + ".html";
                }
            };
        }
    }

    // img1
    const img1 = document.getElementById('imgName');
    if (img1) {
        document.getElementById('imgName').value = "hero_img";
        document.getElementById('width').value = "680";
        document.getElementById('height').value = "600";
    }

    // img2
    const img2 = document.getElementById('imgName2');
    if (img2) {
        document.getElementById('imgName2').value = "SOH_logo";
        document.getElementById('width').value = "400";
        document.getElementById('height').value = "200";
    }

    // img3
    const img3 = document.getElementById('imgName3');
    if (imgName3) {
        document.getElementById('imgName3').value = "twitter_widget";
        document.getElementById('width').value = "100";
        document.getElementById('height').value = "100";
    }
};

function pagesBack() {
    window.location.href = "image_setting.html";
}