/**
 * @author: Iswanul Umam - Red Fox
 */

function tree(n){
  var result = [];
      result[0] = [1];
      result[1] = [1,1];
  for (var row = 2; row < n; row++){
      result[row] = [1];
      for (var col = 1; col <= row -1; col++){
          result[row][col] = result[row-1][col] + result[row-1][col-1];
          result[row].push(1);
      }
  }
  return result;
}
  
for (var i = 0; i < tree(10).length; i++) {
    // document.write(tree(10)[i]+"<br>");
    console.log(tree(10)[i]);
}