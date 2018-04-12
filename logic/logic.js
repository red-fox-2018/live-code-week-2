function board(start, level) {
  var arrAngka = [
    [start]
  ];

  for (var i = 0; i < level - 1 ; i++) {
    var arr = [start];
    for (var j = 1; j < arrAngka[i].length; j++) {
      arr[j] = arrAngka[i][j] + arrAngka[i][j - 1];
    }
    arr.push(start)
    arrAngka.push(arr)
  }
  return arrAngka
}

function tree(start, level, divider) {
  var boards = board(start, level);
  var banyak = 0;

  for (var i = 0; i < boards.length; i++) {
    for (var j = 0; j < boards[i].length; j++) {
      if (boards[i][j] % divider == 0) {
        banyak += 1;
      }
    }
  }
  console.log(boards);
  return banyak
}

console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6
//
console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0
//
console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6
