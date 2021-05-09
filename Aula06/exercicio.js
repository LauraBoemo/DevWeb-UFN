function calc(){
  var op, val1, val2, result, aux;

  op = document.getElementById("op").value
  var aux = document.getElementById("val1").value
  val1 = parseInt(aux)
  var aux2 = document.getElementById("val2").value
  val2 = parseInt(aux2)

  switch (op) {
      case "1":
          result = val1 + val2;
          break;
      case "2":
          if(val1 < val2){
              aux = val1;
              val1 = val2;
              val2 = aux;
              result = val1 - val2;
          }else{
              result = val1 - val2;
          }
          break;
      case "3":
          result = val2 * val2;
          break;
      case "4":
          if(val1 < val2){
              aux = val1;
              val1 = val2;
              val2 = aux;
              result = val1 / val2;
          }else{
              result = val1 / val2;
          }
          break;
      default:
          result = "Operador escolhido inválido.";
          break;
  }

  var localResultado = document.getElementById("resultado");
  localResultado.innerHTML = "<h3>O resultado é: "+result+"</h3>";
}