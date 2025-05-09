function abrirTab(evt,nomeTab){ /*evt recebendo o evento e o nometab é o id da article*/
    const conteudotab=document.getElementsByClassName("conteudotab");
    for(var i=0;i< conteudotab.length;i++){
        conteudotab[i].style.display="none";
    }
    const btnTabs = document.querySelectorAll('[data-btntabs]');
    for(var i=0;i< btnTabs.length;i++){
        btnTabs[i].classList.remove('ativo');
    }
    document.getElementById(nomeTab).style.display="block";
    evt.currentTarget.classList.add("ativo");
}

document.getElementById("primeiro").click;