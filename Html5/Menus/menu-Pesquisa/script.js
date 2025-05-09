function pesquisar(){
    var input,filtro,menu,menuItens,Links;
    input = document.getElementById('pesquisa'); /*pega o id do input */ 
    filtro = input.Value.toUpperCase();/* pega os caracteres e colocar maisculos*/
    menu = document.getElementById('menu');
    menuItens = menu.getElementsByTagName("li");/* dentro do id menu eu pego os elementos "li" */
    for(var i=0;i<menuItens.length;i++){
    Links = menuItens[i].getElementsByTagName("a")[0]; /*pegar os elemtnos a dentro dos li */
    if(Links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="";
    }else{
            menuItens[i].style.display="none";
    }
    }

}