function tree(start, level, divider) {
  let result = [];
  let temp = [];
  for (let i = 0; i < level; i++) {
    let output = []
    for (let j = 0; j < i+1; j++) {
      if(j === 0) {
        output.push(start);
      }else if (j === i) {
        output.push(start)
      }else {
        output.push(temp[j]+temp[j-1])
      }
    }
    temp = output
    result.push(output);
  }

  // cek angka yang habis dibagi divider
  let counter = 0; 
  for(let i of result) {
    for (let j of i) {
      if (j % divider === 0) {
        counter++
      }
    }
  }
  return counter
}

// start, level, divider
console.log(tree(1, 6, 3)); //output: 3
console.log(tree(1, 6, 2)); //output: 6

console.log(tree(1, 8, 3)); //output: 9
console.log(tree(1, 8, 8)); //output: 0

console.log(tree(5, 6, 5)); //output: 21
console.log(tree(5, 6, 10)); //output: 6