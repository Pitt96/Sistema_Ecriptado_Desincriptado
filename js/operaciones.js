
/* *************************************************Capturamos los botones en variables**************************************************/
let botonEncriptar = document.querySelector('.btn_en');
let botonDesencriptar = document.querySelector('.btn_des');
let botonCopiar = document.querySelector('.copiar');

// ************************************************* EVENTOS DE BOTONES *************************************************
//Evento para encriptar AL HACER CLICK EN EL BOTON
botonEncriptar.addEventListener('click', function(){
    let texto = document.querySelector('#text_input').value;
    let resultado = document.querySelector('#resultado');
    if(texto == ''){
        alertaCampoVacio();
    }else{
        cambiarEstilo();
        let encriptado = encriptar(texto);
        resultado.innerHTML = encriptado;
    }
    
} );

//Evento para desencriptar AL HACER CLICK EN EL BOTON
botonDesencriptar.addEventListener('click', function(){ 
    let texto = document.querySelector('#text_input').value;
    let resultado = document.querySelector('#resultado');
    if(texto == ''){
        alertaCampoVacio();
    }else{
        cambiarEstilo();
        let desencriptado = desencriptar(texto);
        resultado.innerHTML = desencriptado;
    }
    
});

//Evento para copiar el texto encriptado AL HACER CLICK EN EL BOTON
botonCopiar.addEventListener('click', function() {
    let texto_salida = document.querySelector('#resultado'); 
    texto_salida.select();
    document.execCommand('copy');
    texto_salida.innerHTML="";
    alertaCopiado();
});


// *************************************************Funciones para alertas*************************************************
function alertaCopiado(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Copiado exitosamente',
        showConfirmButton: false,
        timer: 1500
    })
}
function alertaCampoVacio(){
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Campo Vacio',
        showConfirmButton: false,
        timer: 1500
    })
}
//************************************************* Funciones para ocultar y visualizar*************************************************


function cambiarEstilo(){
    let content_nada = document.querySelector('.mensaje_nada');
    let conetnt_salida = document.querySelector('.mensaje_salida');

    content_nada.style.display = 'none';
    conetnt_salida.style.display = 'initial';
}

//*************************************************Funciones para encriptar y desencriptar(texto)*************************************************
//desencriptar(texto)
function desencriptar(texto){
    let desencriptado = '';
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == 'a'){
            desencriptado += 'a';
            i+=1;
        }else if(texto[i] == 'e'){
            desencriptado += 'e';
            i+=4;
        }else if(texto[i] == 'i'){
            desencriptado += 'i';
            i+=3;
        }else if(texto[i] == 'o'){
            desencriptado += 'o';
            i+=3;
        }else if(texto[i] == 'u'){
            desencriptado += 'u';
            i+=3;
        }else{
            desencriptado += texto[i];
        }
    }
    return desencriptado;
}
//encriptar(texto)
function encriptar(texto){
    let encriptado = '';
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == 'a'){
            encriptado += 'ai';
        }else if(texto[i] == 'e'){
            encriptado += 'enter';
        }else if(texto[i] == 'i'){
            encriptado += 'imes';
        }else if(texto[i] == 'o'){
            encriptado += 'ober';
        }else if(texto[i] == 'u'){
            encriptado += 'ufat';
        }else{
            encriptado += texto[i];
        }
    }
    return encriptado;
} 
