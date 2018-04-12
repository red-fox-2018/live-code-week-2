/**
 * @author: Iswanul Umam - Red Fox
 */

const RumahSakit = require('./RumahSakit');
const Bpjs = require('./Bpjs');
const Asuransi = require('./Asuransi');

// console.log(RumahSakit, Asuransi, Bpjs);

// @ Release 0
console.log('################### Release 0 ###################');

console.log('################### Release 1 ###################');

let tukiminBpjs = new Bpjs('Tukimin', 30, 'laki-laki', 'bpjs', 'diare', 0, 'Kelas 2', false);
// console.log(tukiminBpjs);

let rahmatAsuransi = new Asuransi('Rahmat', 30, 'laki-laki', 'asuransi', 'diare', 0, 'VIP', false);
// console.log(rahmatAsuransi);

let rumahSakit = new RumahSakit();

rumahSakit.checkIn(rahmatAsuransi);

rahmatAsuransi = new Asuransi('Rahmat', 30, 'laki-laki', 'asuransi', 'diare', 0, 'Kelas 1', false);

rumahSakit.checkIn(rahmatAsuransi);
rumahSakit.checkIn(rahmatAsuransi);
rumahSakit.checkIn(tukiminBpjs);

console.log(rumahSakit);

console.log('################### Release 2 ###################');
