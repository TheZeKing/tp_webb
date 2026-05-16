console.log("Script loaded successfully!");
const btn = document.getElementById("btn");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("mot de passe");

console.log(btn);
console.log(nom.value);
console.log(email.value);
console.log(password.value);
btn.addEventListener("click", function() {
    console.log("Button clicked!");
    console.log("Nom: " + nom.value);
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);

    if (nom.value === "") {
        alert("Nom est manquant");
        return;
    }

    if (email.value === "") {
        alert("Email est manquant");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Email doit contenir @");
        return;
    }

    if (password.value === "") {
        alert("Mot de passe est manquant");
        return;
    }

    if (password.value.length < 6) {
        alert("Mot de passe doit contenir au moins 6 caractères");
        return;
    }

    if (!/[a-z]/.test(password.value)) {
        alert("Mot de passe doit contenir une minuscule");
        return;
    }

    if (!/[A-Z]/.test(password.value)) {
        alert("Mot de passe doit contenir une majuscule");
        return;
    }

    if (!/[0-9]/.test(password.value)) {
        alert("Mot de passe doit contenir un chiffre");
        return;
    }

    alert(nom.value + " " + email.value + " " + password.value);
});