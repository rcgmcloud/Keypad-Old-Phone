function presses(phrase) {
  var total = 0;
  var arr = phrase.split("");

  var oneArr = ['1', 'A', 'D', 'G', 'J', 'M', 'P', 'T', 'W', ' ', '*', '#'];
  var twoArr = ['B', 'E', 'H', 'K', 'N', 'Q', 'U', 'X', '0'];
  var threeArr = ['C', 'F', 'I', 'L', 'O', 'R', 'V', 'Y'];
  var fourArr = ['2', '3', '4', '5', '6', 'S', '8', 'Z'];
  var fiveArr = ['7', '9'];

  function checkArr(array, num){
    for (var j = 0; j< array.length; j++){
      if (arr[i] === array[j] || arr[i] === array[j].toLowerCase()){
        total += num;
        return total;
      }
    }
  }

  //loop through oneArr
  for (var i = 0; i < arr.length; i++){
    checkArr(oneArr, 1);
  }

  //loop through twoArr
  for (var i = 0; i < arr.length; i++){
    checkArr(twoArr, 2);
  }

  for (var i = 0; i < arr.length; i++){
    checkArr(threeArr, 3);
  }

  for (var i = 0; i < arr.length; i++){
    checkArr(fourArr, 4);
  }

  return total;
}