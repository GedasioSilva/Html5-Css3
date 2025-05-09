var numSlide=1;
mostrarSlide(numSlide);

function mudarSlide(ns){
    mostrarSlide(numSlide += ns);
}

function SlideAtual(ns){
    mostrarSlide(numSlide = ns);
}
function mostrarSlide(ns){
    var slides=document.getElementsByClassName("slide");/* pegando os elementos das class*/
    var indicadores=document.getElementsByClassName("indicador");/* pegando os indicadores*/

   if(ns > slides.length){ /* se o ns " números de slides for maior que slides.lenght ai vai receber o valor 1 pra voltar ao inicio"*/
        numSlide=1;
   }
   if(ns < 1){ /* se o numero de slides for menor que 1 ai vai receber o maior número de slides pra ir direto pro último slider*/
    numSlide=slides.length;
    }

    for(var i=0;i<slides.length;i++){ /* for pra ocultar todos os slides */
        slides[i].style.display="none";
    }

    for(var i=0;i< indicadores.length;i++){
        indicadores[i].className = indicadores[i].className.replace("ativo",""); /* retirando a class ativo*/
    }
    slides[numSlide-1].style.display="block";
    indicadores[numSlide-1].className += "ativo";

}
