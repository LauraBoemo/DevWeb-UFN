function teste() {
  var numero = document.forms["PoI"]["numero"].value
  var out = document.forms["PoI"]["numero"].value
  var paroimp = numero % 2 
    if(paroimp = 1){
      out.innerHTML = "Este é um número impar."
    }else{
      out.innerHTML = "Este é um número par."
    }
}