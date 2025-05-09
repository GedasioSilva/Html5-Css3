const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaScroll(){
const topoPaginaNaJanela=window.pageYOffset+((window.innerHeight*3)/4); /* 3/4 da Janela*/
elementos.forEach(function(elemento){
if(topoPaginaNaJanela > elemento.OffsetTop){
    elemento.classList.add(animacaoClass);
}else{
    elemento.classList.remove(animacaoClass);
}
});
    }
 if(elementos.length){
    window.addEventListener('scroll',function(){
    animaScroll();
 })
}
