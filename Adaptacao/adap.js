function teste() {
  var massa = document.forms["IMC"]["massa"].value
  var altura = document.forms["IMC"]["altura"].value
  var imc = massa/(altura*altura) 
    if(imc < 17){
     alert("Você está muito abaixo do peso.") 
    }else if(imc >= 17 && imc <= 18.49){
      alert("Você está abaixo do peso.") 
    }else if(imc >= 18.50 && imc <= 24.99){
      alert("Você está com um peso normal.") 
    }else if(imc >= 25 && imc <= 29.99){
      alert("Você está acima do peso.") 
    }else if(imc >= 30 && imc <= 34.99){
      alert("Você está com obesidade I.") 
    }else if(imc >= 35 && imc <= 39.99){
      alert("Você está com obesidade II.") 
    }else if(imc >= 40){
      alert("Você está com obesidade III.") 
    }
}