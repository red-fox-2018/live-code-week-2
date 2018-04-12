/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/

function tree(start, level, divider) {
  let hasil = [];
  for(let i = 0; i < level; i++){
    let row = [];
    for (let j = 0; j < start+i; j++){
      row.push('');
    }
    hasil.push(row);
  }
  return hasil;
}


console.log(tree(1, 4, 3));  //output: 4
// console.log(tree(1, 6, 2));  //output: 6
//
// console.log(tree(1, 8, 3));  //output: 9
// console.log(tree(1, 8, 8));  //output: 0
//
// console.log(tree(5, 6, 5));  //output: 21
// console.log(tree(5, 6, 10)); //output: 6

/*
**CASE 1** : Apabila start nya 3 dan level nya , maka pohon angka seperti ini :

```
3
3-3
3-6-3
3-9-9-3
```

**CASE 2** : Apabila start nya 2 dan level nya 5, maka pohon angka seperti ini :

```
2
2-2
2-4-2
2-6-6-2
2-8-12-8-2
```

**CASE 3** : Apabila start nya 5 dan level nya 7, maka pohon angka seperti ini :

```
5
5-5
5-10-5
5-15-15-5
5-20-30-20-5
5-25-50-50-25-5
5-30-75-100-75-30-5
 */
