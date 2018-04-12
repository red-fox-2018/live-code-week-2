/**
 * 
 * @author: Iswanul Umam - Red Fox
 */

function tree(start, level, divider) {
  let checkNumber = function (n, k, s) {
    let res = s;
    if (k > n - k) {
      k = n - k;
    }
    for (let i = 0; i < k; ++i) {
      res *= (n - i);
      res /= (i + 1);
    }
    return res;
  }

  let result = [];
	for (let line = 0; line < level; line++) {
    result[line] = [];
		for (let i = 0; i <= line; i++) {
      result[line].push(checkNumber(line, i, start));
    }
  }

  let total = 0;
  for (let res of result) {
    for (let value of res) {
      if (value % divider == 0) {
        total++;
      }
    }
  }
  return total;
}

// driver code -----------------------------------

console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6

console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0

console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6

