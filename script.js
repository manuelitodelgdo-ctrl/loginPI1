const formulario = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.querySelector('input[type="text"]').value;
    const contraseña = document.querySelector('input[type="password"]').value;

    if (usuario === "admin" && contraseña === "Admin2026!PI") {
        mensaje.textContent = "¡Bienvenido, " + usuario + "!";
        mensaje.style.color = "#4CAF50";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "#ff5555";
    }
});

const registro = document.getElementById("registro");

registro.addEventListener("click", function(event) {
    event.preventDefault();

    alert("Página de registro próximamente");
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
}