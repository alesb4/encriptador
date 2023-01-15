const cuadroTraductor = document.querySelector('#textoEncriptar');
const botonEncriptar = document.querySelector('#botonEncriptar');
const botonDesencriptar = document.querySelector('#botonDesencriptar');
const botonCopiar = document.querySelector('#botonCopiar');
const textoAreaTraduccido = document.querySelector('#textoAreaTraduccido');




botonEncriptar.addEventListener('click', function(e) {
    // evita que el boton envie el formulario y se recargue la pagina
    e.preventDefault();

    // Almacena la cadena de texto que se va a traducir

    let textoSinTraduccir = cuadroTraductor.value;

    //Creo mi variable de Traduccion
    const textoTraducido = traductor(textoSinTraduccir, 1);

    //Envio lo traduccido a mi textarea
    textoAreaTraduccido.textContent = textoTraducido;

    //Habilito el uso del boton copiar
    botonCopiar.disabled = false;
    botonCopiar.classList.add('existe');


})


botonDesencriptar.addEventListener('click', function(e) {
    e.preventDefault();
    let textoSinTraduccir = cuadroTraductor.value;
    const textoTraducido = traductor(textoSinTraduccir, 2);
    textoAreaTraduccido.textContent = textoTraducido;
    botonCopiar.disabled = false;
    botonCopiar.classList.add('existe');
})


botonCopiar.addEventListener('click', function(e) {
    e.preventDefault();

    navigator.clipboard.writeText(textoAreaTraduccido.textContent)

})






function traductor(texto, diccionario) {
    //creamos un contenedor para nuesta nuevo texto
    let nuevoTexto = texto;
    // hice dos diccionarios que remplasan nuestras letras y llaves
    if (diccionario == 1) {
        const remplasaE = /e/g;
        nuevoTexto = nuevoTexto.replace(remplasaE, 'enter');

        const remplasaI = /i/g;
        nuevoTexto = nuevoTexto.replace(remplasaI, 'imes');

        const remplasaA = /a/g;
        nuevoTexto = nuevoTexto.replace(remplasaA, 'ai');

        const remplasaO = /o/g;
        nuevoTexto = nuevoTexto.replace(remplasaO, 'ober');

        const remplasaU = /u/g;
        nuevoTexto = nuevoTexto.replace(remplasaU, 'ufat');

    }

    if (diccionario == 2) {
        const remplasaE = /enter/g;
        nuevoTexto = nuevoTexto.replace(remplasaE, 'e');

        const remplasaI = /imes/g;
        nuevoTexto = nuevoTexto.replace(remplasaI, 'i');

        const remplasaA = /ai/g;
        nuevoTexto = nuevoTexto.replace(remplasaA, 'a');

        const remplasaO = /ober/g;
        nuevoTexto = nuevoTexto.replace(remplasaO, 'o');

        const remplasaU = /ufat/g;
        nuevoTexto = nuevoTexto.replace(remplasaU, 'u');
    }

    return nuevoTexto;
}