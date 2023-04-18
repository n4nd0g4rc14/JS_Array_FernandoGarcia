function contains(array, elemento) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        return true;
      }
    }
    return false;
  }

  var array1 = [1, 2, 3, 4, 5];
  var array2 = ['a', 'b', 'c', 'd'];
  console.log(contains(array1, 3));
  console.log(contains(array2, 'c')); 