const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop; /* ele faz a medida do nav para o topo do body*/

window.onscroll=function(){
    fixarMenuNoTo();
}
function fixarMenuNoTo(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add("FixoNoTopo");
    }else{
        nav.classList.remove("FixoNoTopo");
    }
}