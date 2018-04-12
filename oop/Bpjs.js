
const Patient = require('./Patient');

class Bpjs extends Patient {
  constructor(name, age, gender, typePatient, diagnosis, totalDayTreatment, room, isCheckOut) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.typePatient = typePatient;
    this.budgetMax = 2000000;
    this.diagnosis = diagnosis;
    this.totalDayTreatment = totalDayTreatment || 0;
    this.room = room;
    this.isCheckOut = isCheckOut;
  }
}

// let tukiminBpjs = new Bpjs('Tukimin', 30, 'laki-laki', 'bpjs', 'diare', 0, 'Kelas 2', false);
// console.log(tukiminBpjs);

module.exports = Bpjs;