const RumahSakit = require ('./rumahSakit').RumahSakit
const Patient = require ('./pasien').Patient
const PasienBPJS = require ('./pasien').PasienBPJS
const PasienAsuransi = require ('./pasien').PasienAsuransi

let rumahSakit = new RumahSakit()
// let pasien = new Patient()

let budi = new PasienBPJS('budi',20,'l')
// console.log(budi)
let john = new PasienAsuransi('john', 21, 'l')
// console.log(john)

// budi.checkIn(budi, 'VIP')
budi.checkIn(budi, 'kelas 1', 'Diare')
john.checkIn(john, 'VIP', 'Tipes')

let pastiens = [budi, john]
rumahSakit.showPatient(pastiens)


