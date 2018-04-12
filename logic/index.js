function countDivide(divider, tree){
  let count = 0
  for(let i=0; i<tree.length; i++){
    for(let j =0; j< tree[i].length; j++){
      if(tree[i][j] % divider === 0){
        count +=1
      }
    }
  }
  return count
}

function tree(start, level, divider) {
  let tree = []
  for(let i=0; i<level; i++){
    let row = []
    for(let j=0; j < (i+1) ; j++){
      if(j == 0 || j == i){
        row.push(start)
      }else{
        let temp= tree[i-1][j] + tree[i-1][j-1]
        row.push(temp)
      }
    }
    tree.push(row)
  }

  let resultNumber = countDivide(divider, tree)
  return resultNumber
}



console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6

console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0

console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6
