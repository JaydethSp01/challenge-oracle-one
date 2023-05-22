document.addEventListener('DOMContentLoaded', function(){
    var texto_textarea = document.getElementById('texto');
    var boton_encriptar = document.getElementById('encriptar');
    var boton_desencriptar = document.getElementById('desencriptar');
    var resultado_texto = document.getElementById('resultado_texto');
    var parrafo = document.getElementById('parrafo_1');
    var imagen = document.getElementById('muñeco');
    var copiar = document.getElementById('copiar');

    boton_encriptar.addEventListener('click', function() {
        var texto_contenido = texto_textarea.value;
        var texto_encriptado = texto_contenido.replace(/e/img, "enter");
        texto_encriptado = texto_encriptado.replace(/o/img, "ober");
        texto_encriptado = texto_encriptado.replace(/i/img, "imes");
        texto_encriptado = texto_encriptado.replace(/a/img, "ai");
        texto_encriptado = texto_encriptado.replace(/u/img, "ufat");
        const palabras = /^[a-z\s]+$/;
        if (!palabras.test(texto_contenido)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El texto no debe contener caracteres especiales ni letras mayúsculas',
                footer: '<a href=""></a>'
            });
        } else {
            resultado_texto.value = texto_encriptado;
            if (resultado_texto.value === texto_encriptado) {
                parrafo.style.display = "none";
                imagen.style.display = "none";
                copiar.style.display = "block";

            }
        }
    });
    boton_desencriptar.addEventListener('click', function(){
        var texto_contenido = texto_textarea.value;
        var texto_desencriptado = texto_contenido.replace(/enter/img, "e");
        texto_desencriptado = texto_desencriptado.replace(/ober/img, "o");
        texto_desencriptado = texto_desencriptado.replace(/imes/img, "i");
        texto_desencriptado = texto_desencriptado.replace(/ai/img, "a");
        texto_desencriptado = texto_desencriptado.replace(/ufat/img, "u");
        const palabras = /^[a-z\s]+$/;
        if (!palabras.test(texto_contenido)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El texto no debe contener caracteres especiales ni letras mayúsculas',
                footer: '<a href=""></a>'
            });
        } else {
            resultado_texto.value = texto_desencriptado;
            if (resultado_texto.value === texto_desencriptado) {
                parrafo.style.display = "none";
                imagen.style.display = "none";
                copiar.style.display = "block";

            }
        }
    });

    copiar.addEventListener('click', function(){
        resultado_texto.select();
        document.execCommand('copy');
    });
});