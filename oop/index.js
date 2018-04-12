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

let rumahSakit = new RumahSakit();

let tukiminBpjs = new Bpjs('Tukimin', 30, 'laki-laki', 'bpjs', 'diare', 0, 'Kelas 2', false);
// console.log(tukiminBpjs);
rumahSakit.checkIn(tukiminBpjs);

let rahmatAsuransi = new Asuransi('Rahmat', 30, 'laki-laki', 'asuransi', 'Diare', 0, 'VIP', false);
rumahSakit.checkIn(rahmatAsuransi);

rahmatAsuransi = new Asuransi('Rahmat', 30, 'laki-laki', 'asuransi', 'Diare', 0, 'Kelas 1', false);
rumahSakit.checkIn(rahmatAsuransi);
// console.log(rahmatAsuransi);

let japriAsuransi = new Asuransi('Japri', 35, 'laki-laki', 'asuransi', 'Muntaber', 0, 'Kelas 1', false);
rumahSakit.checkIn(japriAsuransi);

console.log(rumahSakit);

console.log('################### Next Day ###################');
rumahSakit.nextDay();
console.log(rumahSakit);

console.log('################### Release 2 ###################');
rumahSakit.showPatient();

console.log('################### Release 3 ###################');



