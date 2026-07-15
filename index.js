function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "Preethi";
    let correctPassword = "24";

    if(username === correctUsername && password === correctPassword){

        // Redirect to another page
        window.location.href = "website/website.html";

    } else{

        document.getElementById("message").textContent =
        "Invalid Username or Password";

    }
}

    function signup() {
    window.location.href = "signup/signup.html";
}


    