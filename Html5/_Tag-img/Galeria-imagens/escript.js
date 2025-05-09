function mostraImagem(img){
   const imagemGrande = document.getElementById("imgemGrande");
    imagemGrande.src=img.src;
    imagemGrande.parentElement.style.display="block";
}