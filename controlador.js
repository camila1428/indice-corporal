//alert("estoy vinculado")

let inputPesoUsuario=document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")


//detectando de clic eventos en pantalla
//un evento es una interaccion del usuario (humano) con el codigo (la pagina web)
botonFormulario.addEventListener("click",function(evento){
    //1. se inicia desactivando el comportamiento por defecto
    evento.preventDefault()

    //2. probamos que el evento se esta escuchando con exito
    //3. creamos variables para almacenar los
    //datos del usuario
    let estaturaUsuario=inputAlturaUsuario.value
    let pesoUsuario=inputPesoUsuario.value

    //4. se crea una variable para el resultado
    let resultado=document.getElementById("resultado")
    
    //5. se modifica el resultado con los value
    resultado.textContent=(estaturaUsuario)

    //6. se calcula lo pedido:
    let calculoIMC=pesoUsuario/(estaturaUsuario*estaturaUsuario)


    //6A. se crea variable para almacenar la imagen
    let imagen=document.getElementById("foto")


    //7. se debe decidir sobre el resultado
    if(calculoIMC<18.5){
      resultado.textContent="Estas llevado, alimentate"
      imagen.src="./img/bajopeso.PNG"
    }
    else if(calculoIMC>=18.5 && calculoIMC<24.9){
      resultado.textContent="Estas melo, felicitaciones"
      imagen.src="./img/normal.PNG"
    }
    else if(calculoIMC>=24.9 && calculoIMC<29.9){
      resultado.textContent="Deja de mecatiar lengua de burro, tienes sobrepeso"
      imagen.src="./img/sobrepeso.PNG"
    }
    else if(calculoIMC>=29.9 && calculoIMC<34.9){
      resultado.textContent="No consumas comida chatarra, estas obes@"
      imagen.src="./img/obeso.PNG"
    }
    else{
      resultado.textContent="San pedro te espera, hasta siempre..."
      imagen.src="./img/extremo.PNG"
    }

     /*Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });*/


})