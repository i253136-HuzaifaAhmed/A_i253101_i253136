function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signUpForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signUpForm.style.display = "block";
    }
}
