/*Desenvolvido por José Igor @j.igr*/
/* Validação de usuário por client side */

var usuarios = [
    {"login": "igor", "senha": "igor"},
    /*{"login": "teste1", "senha": "teste1"},*/
    /*{"login": "test2", "senha": "teste"},*/
];

function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u]; 
        if (us.login === usuario && us.senha === senha) {
            
            window.location.href = "http://localhost/sistema-comentando/resposta";
            /*return true;*/
            /*alert("dados corretos")*/
        }
    }
    alert("Dados incorretos");
    return false;
}

/*var a = document.getElementById("area")
a.addEventListener('mouseenter',clica)
function clica (){
    a.innerText = `Clique aqui`
}

var b = document.getElementById("area")*/
/**/
