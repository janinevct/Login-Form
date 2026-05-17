let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if(email == "" && password == ""){

        message.innerHTML = "Please fill out all fields.";
        message.className = "error";

    }

    else if(email == ""){

        message.innerHTML = "Email is required.";
        message.className = "error";

    }

    else if(password == ""){

        message.innerHTML = "Password is required.";
        message.className = "error";

    }

    else if(password.length < 6){

        message.innerHTML = "Password must be at least 6 characters.";
        message.className = "error";

    }

    else{

        message.innerHTML = "Login successful!";
        message.className = "success";

    }

});