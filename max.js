function max(array) {  
    var maiorValor = array[0];
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] > maiorValor) {
        maiorValor = array[i];
      }
    }
    console.log('O maior valor é:', maiorValor);
  }
  
  var array1 = [20, 70, 30, 40, 10];
  var array2 = [-8, 4, 10, 2];
  max(array1);
  max(array2);