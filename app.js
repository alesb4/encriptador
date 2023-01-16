//Agrego los elementos a utilizar
const cuadroTraductor = document.querySelector('#textoEncriptar');
const botonEncriptar = document.querySelector('#botonEncriptar');
const botonDesencriptar = document.querySelector('#botonDesencriptar');
const botonCopiar = document.querySelector('#botonCopiar');
const textoAreaTraduccido = document.querySelector('#textoAreaTraduccido');
const imagenOculta = document.querySelector('.imagenOculta');

// Creo la funcion de traduccion
function traductor(texto, diccionario) {
    //creamos un contenedor para nuesta nuevo texto
    let nuevoTexto = texto;
    // hice dos diccionarios que remplasan nuestras letras y llaves de las dos maneras
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

    // Retorna un valor 
    return nuevoTexto;
}

//Genero acciones para los elementos
botonEncriptar.addEventListener('click', function(e) {
    // evita que el boton envie el formulario y se recargue la pagina
    e.preventDefault();
    //Evalua que no valla vacio el cuadroTraductor
    if (cuadroTraductor.value != '') {
        // Almacena la cadena de texto que se va a traducir
        let textoSinTraduccir = cuadroTraductor.value;

        //Creo mi variable de Traduccion
        const textoTraducido = traductor(textoSinTraduccir, 1);

        //Envio lo traduccido a mi textarea
        textoAreaTraduccido.textContent = textoTraducido;

        //Habilito el uso del boton copiar
        botonCopiar.disabled = false;
        botonCopiar.classList.add('existe');

        //ocualta la imagen
        imagenOculta.classList.remove('imagenOculta');
        imagenOculta.classList.add('oculto');
    } else {
        //notifica que no se cumplen requisitos
        alert('No cumple los parametros para encriptar')
    }

})

//El boton desencriptar funciona que la misma manera que el de encriptar
botonDesencriptar.addEventListener('click', function(e) {
    e.preventDefault();
    if (cuadroTraductor.value != '') {
        let textoSinTraduccir = cuadroTraductor.value;
        const textoTraducido = traductor(textoSinTraduccir, 2);
        textoAreaTraduccido.textContent = textoTraducido;
        botonCopiar.disabled = false;
        botonCopiar.classList.add('existe');
        imagenOculta.classList.remove('imagenOculta');
        imagenOculta.classList.add('oculto');

    } else {
        alert('No cumple los parametros para desencriptar')
    }

})

//El boton copiar funciona de una manera distinta
botonCopiar.addEventListener('click', function(e) {
    //Evitamos que haga acciones por defecto
    e.preventDefault();

    //Le decimos al navegador que copie el texto de nuestra traduccion
    navigator.clipboard.writeText(textoAreaTraduccido.textContent)

    //Notificamos al usuario
    alert('Texto copiado!!')
})