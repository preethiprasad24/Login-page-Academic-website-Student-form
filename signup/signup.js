function createAccount(){

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    if(username === "" ||
       password === "" ||
       phone === "" ||
       address === ""){

        document.getElementById("message").textContent =
        "Please fill in all fields.";

        return;
    }

    // Save data to Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);

    alert("Account created successfully!");

    // Go back to login page
    window.location.href = "index.html";
}