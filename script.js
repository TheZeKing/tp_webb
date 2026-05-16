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
    alert (nom.value + " " + email.value + " " + password.value); 
});