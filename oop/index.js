// Patient BPJS maksimal dapat memilih room kelas 1
const Patient = require('./patient');
const Hospital = require('./hospital');
let hospital = new Hospital()

let dia = new Patient('Dia', 17, 'female', 'BPJS', 'muntaber');
let robi = new Patient('Robi', 24, 'male', 'BPJS', 'diare');

let heru = new Patient('Heru', 21, 'male', 'Asuransi', 'tipes');
let zuckerberg = new Patient('Mark Zuckerberg', 30, 'male', 'Asuransi', 'other');

// dia.checkIn('kelas 1');
hospital.checkIn(dia, 'kelas 1');
hospital.checkIn(heru, 'VIP');
hospital.nextDay()
hospital.nextDay()
hospital.nextDay()
hospital.nextDay()
hospital.nextDay()
hospital.showPatient();
