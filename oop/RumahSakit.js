

// class rumah sakit ------------------------------------------------------

class RumahSakit {
  constructor(penyakit, room) {
    this.patients = [];
    this.penyakit = penyakit;
    this.room = room;
  }
  checkIn(objectPatient) {
    if (objectPatient.typePatient == 'asuransi' && objectPatient.room == 'VIP') {
      console.log('Mohon maaf anda layanan kamar ini tidak tersedia');
    } else {
      // @ validate patienct is exist or not
      if (!this._isExistPatient(objectPatient)) {
        console.log('Berhasil check in!');
        this.patients.push(objectPatient); 
      } else {
        console.log('Pasien telah terdaftar');
      }
    }
  }
  _isExistPatient(objectPatients) {
    for (let p of this.patients) {
      if (p.name == objectPatients.name) {
        return true;
      }
    }
    return false;
  }
  nextDay() {
    if (this.patients.length > 0) {
      for (let i = 0; i < this.patients.length; i++) {
        this.patients[i].nextDay();
        this._checkIncoice(this.patients[i]);
      }
    }
  }
  showPatient() {
    if (this.patients.length > 0) {
      console.log('LIST PASIEN:');
      for (let i = 0; i < this.patients.length; i++) {
        console.log(`${i + 1}. ${this.patients[i].name} (${this.patients[i].diagnosis} hari ke ${this.patients[i].totalDayTreatment + 1})`);
      }
    }
  }
  _checkIncoice(objectPatint) {
    for (let p of this.penyakit) {
      if (objectPatint.totalDayTreatment >= p.totalPerawatan && objectPatint.diagnosis == p.name) {
        console.log('**************************INVOICE****************************');
        console.log(`Name: ${objectPatint.name}`);
        console.log(`Age: ${objectPatint.age}`);
        console.log(`Diagnosis: ${objectPatint.diagnosis}`);
        console.log(`Telah menjalani perawatan selama: ${objectPatint.totalDayTreatment} hari`);
        console.log(`Total pembayaran sebesar: -`);
        console.log('*************************************************************');
      }
    }
  }
}

module.exports = RumahSakit;