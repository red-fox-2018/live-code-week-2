
const Patient = require('./Patient');

class Asuransi extends Patient {
  constructor(name, age, gender, typePatient, diagnosis, totalDayTreatment, room, isCheckOut) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.typePatient = typePatient;
    this.budgetMax = 2000000;
    this.diagnosis = diagnosis;
    this.totalDayTreatment = totalDayTreatment;
    this.room = room;
    this.isCheckOut = isCheckOut;
  }
}

let rahmatAsuransi = new Asuransi('Rahmat', 30, 'laki-laki', 'asuransi', 'diare', 0, 'Kelas 1', false);

console.log(rahmatAsuransi);

module.exports = Asuransi;