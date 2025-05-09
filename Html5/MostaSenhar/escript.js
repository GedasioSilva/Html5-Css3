function mostrarOcultarSenhar(){
    var senha = document.getElementById("senhar");
    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}