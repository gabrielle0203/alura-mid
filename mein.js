function tocaSomPom(idElementoAudio){
document.querySelector(idElementoAudio)
}

document.querySelector('.tecla_pom');{
   
   document.querySelector('#som_tecla_pom').play('');
}
   document.querySelectorAll('.tecla')  
   const listadetecla = document.querySelectorAll('.tecla')

   listadetecla[0].onclick = tocaSomPom;

   while(contador < 9){
      listadetecla[contador].onclick = function(){

         tocaSomPom('#som_tecla_clap');
      }

      contador = contador + 1;
   }

