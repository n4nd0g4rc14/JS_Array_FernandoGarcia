function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  }
  var meuArray = [1, 2, 3, 4, 5];
  console.log("Array inverso:");
  printReverse(meuArray);