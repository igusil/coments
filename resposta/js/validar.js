/*Desenvolvido por José Igor @j.igr*/
/* Validação de usuário por client side */


var usuarios = [
    {"login": "igor", "senha": "igor"},
    /*{"login": "teste1", "senha": "teste1"},*/
    /*{"login": "test2", "senha": "teste"},*/
];

function Login() {
    // Obtém o valor do campo de entrada do nome de usuário e converte para minúsculas
    var usuario = document.getElementsByName("username")[0].value.toLowerCase();
  
    // Obtém o valor do campo de entrada de senha
    var senha = document.getElementsByName("password")[0].value;
  
    // Percorre a matriz de usuários com um loop for...in
    for (var u in usuarios) {
      // Obtém um usuário da matriz
      var us = usuarios[u];
  
      // Verifica se as credenciais do usuário atual são iguais as inseridas no input
      if (us.login === usuario && us.senha === senha) {
        // Se as credenciais correspondem, a função retorna verdadeiro e redireciona
        window.location.href = "http://localhost/backupSistema/resposta/";
        /*return true;*/
      }
    }
  
    // Se as credenciais não correspondem a nenhum usuário na matriz, a função retorna falso
    return false;
  }
  

/*var a = document.getElementById("area")
a.addEventListener('mouseenter',clica)
function clica (){
    a.innerText = `Clique aqui`
}

var b = document.getElementById("area")*/