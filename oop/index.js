/**
 * @author: Iswanul Umam - Red Fox
 */

const RumahSakit = require('./RumahSakit');
const Bpjs = require('./Bpjs');
const Asuransi = require('./Asuransi');
const Penyakit = require('./Penyakit');
const Room = require('./Room');

// console.log(RumahSakit, Asuransi, Bpjs);

// @ Release 0
console.log('################### Release 0 ###################');

console.log('################### Release 1 ###################');


let diare = new Penyakit('Diare', 2);
let muntaber = new Penyakit('Muntaber', 3);
let demamBerdarah = new Penyakit('Demam Berdarah', 4);
let tipes = new Penyakit('Tipes', 7);

let vip = new Room('VIP', 1500000);
let kelas1 = new Room('Kelas 1', 750000);
let kelas2 = new Room('Kelas 2', 350000);

let rumahSakit = new RumahSakit([diare, muntaber, demamBerdarah, tipes], [vip, kelas1, kelas2]);

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





