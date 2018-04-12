/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/

class Patient {
  constructor(name, age, gender, diagnosis, room) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.typePatient = '';
    this.budgetMax = 0;
    this.diagnosis = diagnosis;
    this.totalDayTreatment = null;
    this.room = room;
    this.isCheckOut = false;
  }
}

class Bpjs extends Patient {
  constructor() {
    super('Budi', 25, 'Male', 'Diare', 'VIP');
    this.typePatient = 'BPJS';
    this.budgetMax = 10000000;
  }
}

class Asuransi extends Patient {
  constructor() {
    super('Santi', 25, 'Female', 'Muntaber', 'VIP');
    this.typePatient = 'Asuransi';
    this.budgetMax = 20000000;
  }
}


module.exports = {
  Bpjs,
  Asuransi
};
