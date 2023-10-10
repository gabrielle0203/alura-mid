function tocaSomPom(idElementoAudio){
document.querySelector(idElementoAudio)
}

const listaDeTeclas = document.querySelectorAll('.tecla');

 for (contador = 0; contador < listaDeTeclas.length; contador++){

   const instrumento = listaDeTeclas[contador].classList[1];

   const tecla = listaDeTeclas[contador];

   const idAudio = `#som_${instrumento}`

   tecla.onclick = function(){
      tocaSomPom(idAudio);
   }
   
 }