

function tree(n) {
  
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

	for (let line = 0; line < n; line++) {
    result[line] = [];
		for (let i = 0; i <= line; i++) {
      result[line].push(checkNumber(line, i, 3));
    }
  }
  return result;
}

// Driver program 
let n = 7;
console.log(tree(n));


