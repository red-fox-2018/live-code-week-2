

class Patient {
  // @param: name, age, gender, typePatient, diagnosis, totalDayTreatment, room, isCheckOut
  constructor(name, age, gender, typePatient, diagnosis, totalDayTreatment, room, isCheckOut) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.typePatient = typePatient;
    this.diagnosis = diagnosis;
    this.totalDayTreatment = totalDayTreatment || 0;
    this.room = room || 'Kelas 2';
    this.isCheckOut = isCheckOut || false;
  }
}

module.exports = Patient;