function sumArray(array) {
    var soma = 0;
  
    for (var i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }
  
  var array1 = [10, 20, 30, 40];
  var array2 = [5, 10, 5, 5];
  console.log(sumArray(array1));
  console.log(sumArray(array2));