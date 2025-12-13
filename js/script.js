// login function username: admin password: admin

function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email == "admin" && password == "admin") {
        window.location.href = "index_back.html";
    } else if (email == "" && password == "") {
        alert("email and password are required");
    } else if (email == "") {
        alert("email is required");
    } else if (password == "") {
        alert("password is required");
    } else {
        alert("email or password is incorrect");
    }
}