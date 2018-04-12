function tree(start, level, divider) {
  let result = []

  for(let i = 0; i < level; i++){
    let row = []
    for(let j = 0; j < i+1; j++){
      if(i >= 2){
        if(j != 0 && j != (i)){
          row.push(start*i)
        } else {
          row.push(start)
        }
      } else {
        row.push(start)
      }
    }
    result.push(row)
  }
  // console.log(result);

  let counter = 0
  for(let i = 0; i < result.length; i++){
    for(let j = 0; j < result[i].length; j++){
      if(divider / result[i][j] == 1){
        counter += 1
      }
    }
  }
  return counter
}

console.log(tree(3, 4, 9));

// console.log(tree(1, 6, 3))  //output: 3
// console.log(tree(1, 6, 2))  //output: 6

// console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0

// console.log(tree(5, 6, 5))  //output: 21
// console.log(tree(5, 6, 10)) //output: 6
