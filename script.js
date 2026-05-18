const btn = document.getElementById("btn");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("mot de passe");
const togglePasswordSignup = document.getElementById("toggle-password-signup");
const loginBtn = document.getElementById("login-btn");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const togglePasswordLogin = document.getElementById("toggle-password-login");
const showLogin = document.getElementById("show-login");
const showSignup = document.getElementById("show-signup");
const signupSection = document.getElementById("signup-section");
const loginSection = document.getElementById("login-section");
const title = document.getElementById("main-title");

function togglePasswordVisibility(inputElement, toggleButton) {
    if (!inputElement || !toggleButton) {
        return;
    }
    const show = inputElement.type === "password";
    inputElement.type = show ? "text" : "password";
    toggleButton.setAttribute("aria-label", show ? "Cacher le mot de passe" : "Afficher le mot de passe");
    toggleButton.textContent = "";
}

function showSignupSection() {
    signupSection.classList.remove("hidden");
    loginSection.classList.add("hidden");
    title.textContent = "Inscription";
}

function showLoginSection() {
    loginSection.classList.remove("hidden");
    signupSection.classList.add("hidden");
    title.textContent = "Connexion";
}

function getSavedUser() {
    const savedUserJson = localStorage.getItem("saveduser");
    return savedUserJson ? JSON.parse(savedUserJson) : null;
}

if (showLogin) {
    showLogin.addEventListener("click", function(event) {
        event.preventDefault();
        showLoginSection();
    });
}

if (showSignup) {
    showSignup.addEventListener("click", function(event) {
        event.preventDefault();
        showSignupSection();
    });
}

if (togglePasswordSignup) {
    togglePasswordSignup.addEventListener("click", function() {
        togglePasswordVisibility(password, togglePasswordSignup);
    });
}

if (togglePasswordLogin) {
    togglePasswordLogin.addEventListener("click", function() {
        togglePasswordVisibility(loginPassword, togglePasswordLogin);
    });
}

if (loginBtn) {
    loginBtn.addEventListener("click", function() {
        const emailValue = loginEmail.value.trim();
        const passwordValue = loginPassword.value;

        if (emailValue === "") {
            alert("Email est manquant.");
            return;
        }

        if (passwordValue === "") {
            alert("Mot de passe est manquant.");
            return;
        }

        const savedUser = getSavedUser();
        if (!savedUser) {
            alert("Créer un compte.");
            return;
        }

        if (emailValue !== savedUser.email || passwordValue !== savedUser.password) {
            alert("Email ou mot de passe incorrect.");
            return;
        }

        alert("Connexion réussie !");
    });
}

if (btn) {
    btn.addEventListener("click", function() {
        const nameValue = nom.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value;

        if (nameValue === "") {
            alert("Nom est manquant.");
            return;
        }

        if (emailValue === "") {
            alert("Email est manquant.");
            return;
        }

        if (!emailValue.includes("@")) {
            alert("Email doit contenir @.");
            return;
        }

        if (passwordValue === "") {
            alert("Mot de passe est manquant.");
            return;
        }

        if (passwordValue.length < 6) {
            alert("Mot de passe doit contenir au moins 6 caractères.");
            return;
        }

        if (!/[a-z]/.test(passwordValue)) {
            alert("Mot de passe doit contenir une minuscule.");
            return;
        }

        if (!/[A-Z]/.test(passwordValue)) {
            alert("Mot de passe doit contenir une majuscule.");
            return;
        }

        if (!/[0-9]/.test(passwordValue)) {
            alert("Mot de passe doit contenir un chiffre.");
            return;
        }

        const savedUser = {
            nom: nameValue,
            email: emailValue,
            password: passwordValue
        };

        localStorage.setItem("saveduser", JSON.stringify(savedUser));
        alert("Compte créé avec succès. Tu peux maintenant te connecter.");
        showLoginSection();
    });
}

showSignupSection();
