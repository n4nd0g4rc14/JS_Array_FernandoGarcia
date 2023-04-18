function isUniform(array) {
    var primeiroElemento = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] !== primeiroElemento) {
        return false;
      }
    }
    return true;
  }
  
  var array1 = [1, 1, 1, 1, 1];
  var array2 = ["a", "a", "a", "a", "a"];
  console.log(isUniform(array1));
  console.log(isUniform(array2));