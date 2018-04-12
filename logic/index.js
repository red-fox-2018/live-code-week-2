/**
 * 
 * @author: Iswanul Umam - Red Fox
 */

function tree(start, level, divider) {
  let checkNumber = function (n, k, s) {
    let number = s;
    if (k > n - k) {
      k = n - k;
    }
    for (let i = 0; i < k; ++i) {
      number *= (n - i);
      number /= (i + 1);
    }
    return number;
  }

  let allNumber = [];
	for (let line = 0; line < level; line++) {
    allNumber[line] = [];
		for (let i = 0; i <= line; i++) {
      allNumber[line].push(checkNumber(line, i, start));
    }
  }

  let total = 0;
  for (let an of allNumber) {
    for (let value of an) {
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

