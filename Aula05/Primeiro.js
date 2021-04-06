function valida() {
  // Resgata-se, do formulário Login, o valor digitado no campo Nome...
  var usuario = document.forms["login"]["nome"].value
  // Resgata-se, do formulário Login, o valor digitado no campo Senha...
  var usuario_senha = document.forms["login"]["senha"].value
  // Verifica o tipo de usuário e sua senha...
  if(usuario=="root" && usuario_senha=="root"){
    alert("Você é um superusuário e foi autenticado!")
  }else{
    if(usuario=="root"){
      alert("Superusuário com senha incorreta!")
    }
    alert("Você é um usuário comum!")
  }
}