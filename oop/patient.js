const Hospital = require('./hospital');

class Pasien {
  constructor(name, age, gender, typePatient, diagnosis) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.typePatient = typePatient;
    this.budgetMax = null;
    this.diagnosis = diagnosis;
    this.totalDayTreatment = null;
    this.room = null;
    this.isCheckout = false;
    this.invoices = 0;
    this.hari = 1;
  }
}

module.exports = Pasien