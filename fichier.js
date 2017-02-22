function addition(){
  var firstNumber = document.getElementById('premier_nombre').value;
  var secondNumber = document.getElementById('deuxieme_nombre').value;
   // si la valeur n'est pas un nombre tu dit : il faut des nombres
  if (isNaN(firstNumber) || isNaN(secondNumber)){
    alert('Il faut des nombres');
  } else { //sinon tu me donne le resultat de la multiplication
    var result = parseInt(firstNumber) % secondNumber;
    alert(result);
  }
  };
