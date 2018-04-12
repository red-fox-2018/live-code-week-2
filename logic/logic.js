function treeNum(start,level,divider) {
  let arrayNumber = []

  for (var i = 0; i < level; i++) {
    let hasil = ''
    for (var j = 0; j < i+1; j++) {
      if (j === 0) {
        hasil += `${start}`
        arrayNumber.push(start)
      } else if (j === i) {
        hasil += `-${start}`
        arrayNumber.push(start)
      } else {
        hasil += `-${start*i}`
        arrayNumber.push(start*i)
      }
    }
    // console.log(hasil);
  }
  jumlah = 0
  for (var i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i]%divider === 0) {
      jumlah++
    }
  }
  return jumlah;
}
console.log(treeNum(5,6,10));
