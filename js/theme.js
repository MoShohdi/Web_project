// theme.js - Single-object settings logic
window.onload = function() {
    // 1. Load the "Current" settings (Dummy data for now)
    document.getElementById('primaryColor').value = "#0284C7";
    document.getElementById('secondaryColor').value = "#333333";
    document.getElementById('fontChoice').value = "sans-serif";
    document.getElementById('logoUrl').value = "../images/SOH_logo.png";
}

function saveThemeSettings() {
    const themeData = {
        color: document.getElementById('primaryColor').value,
        secondaryColor: document.getElementById('secondaryColor').value,
        font: document.getElementById('fontChoice').value,
        logo: document.getElementById('logoUrl').value
    };

    alert("Primary Theme color has been updated to " + themeData.color + "\nSecondary Theme color has been updated to " + themeData.secondaryColor + "\nFont has been updated to " + themeData.font + "\nLogo has been updated to " + themeData.logo);
}