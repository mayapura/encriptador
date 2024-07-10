document.getElementById("boton-cifrar").addEventListener("click", cifrarTexto);
document.getElementById("boton-descifrar").addEventListener("click", descifrarTexto);
document.getElementById("boton-copiar").addEventListener("click", copiarTexto);

function cifrarTexto() {
  const texto = document.getElementById("texto").value;
  
  if (!validarTexto(texto)) {
    alert("El texto contiene caracteres inválidos. Por favor, usa solo letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }

  const textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  mostrarResultado(textoCifrado);
}

function descifrarTexto() {
  const texto = document.getElementById("texto").value;

  if (!validarTexto(texto)) {
    alert("El texto contiene caracteres inválidos. Por favor, usa solo letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }

  const textoDescifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  mostrarResultado(textoDescifrado);
}

function mostrarResultado(texto) {
  const textoCifrado = document.getElementById("texto-cifrado");
  textoCifrado.value = texto;

  const mensaje = document.querySelector(".mensaje");
  const resultado = document.querySelector(".resultado");

  if (texto) {
    mensaje.style.display = "none";
    resultado.style.display = "block";
  } else {
    mensaje.style.display = "flex";
    resultado.style.display = "none";
  }
}

function copiarTexto() {
  const textoCifrado = document.getElementById("texto-cifrado");
  textoCifrado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}

function validarTexto(texto) {
  const regex = /^[a-z\s]+$/;
  return regex.test(texto);
}