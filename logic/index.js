function tree(start, level, divider) {

  let row = []

  for (var i = level; i > 0; i--) {

    let col = []

    for (var j = i; j <= level; j++) {

      if (i % 2 != 0) {

        if (j == Math.floor(i / 2)) {

          col.push(`${start * 2}-`)

        } else {

          if (j != level) {

            col.push(`${start}-`)

          } else {

            col.push(`${start}`)

          }

        }

      } else {

        if (j != level) {

          col.push(`${start}-`)

        } else {

          col.push(`${start}`)

        }

      }


    }

    row.push(col.join(''));

  }

  return row.join('\n')

}

console.log(tree(1, 6, 3)); // 3
// tree(1, 6, 2) // 6
//
// tree(1, 8, 3) // 9
// tree(1, 8, 8) // 0
//
// tree(5, 6, 5) // 21
// tree(5, 6, 10) // 6
