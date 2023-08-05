const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensagem");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let regexEmail = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (nombre.value.length < 6) {
    warnings += "El nombre no es valido <br>";
  }
  console.log(regexEmail.test(email.value));
  if (!regexEmail.test(email.value)) {
    warnings += "El email no es valido <br>";
  }
});
