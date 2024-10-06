document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;

        // Simulate successful login
        alert(`Logged in as: ${username}`);
        // Redirect to home page
        window.location.href = "index.html";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const username = document.getElementById("reg-username").value;
        const email = document.getElementById("email").value;

        // Simulate successful registration
        alert(`Registered as: ${firstName} ${lastName}, Username: ${username}, Email: ${email}`);
        // Redirect to login page
        window.location.href = "login.html";
    });
});
