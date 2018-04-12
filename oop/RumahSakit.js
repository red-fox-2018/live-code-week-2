

// class rumah sakit ------------------------------------------------------

class RumahSakit {
  constructor() {
    this.patients = [];
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
    // if (this.patients.length > 0) {
    // }
  }
}


// class penyakit ---------------------------------------------------------

class Penyakit {
  constructor(name, totalPerawatan) {
    this.name = name;
    this.totalPerawatan = totalPerawatan || 1;
  }
}

// let diare = new Penyakit('Diare', 2);
// let nuntaber = new Penyakit('Muntaber', 3);
// let demamBerdarah = new Penyakit('Demam Berdarah', 4);
// let tipes = new Penyakit('Tipes', 7);

// class room -----------------------------------------------------

class Room {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

// let vip = new Room('VIP', 1500000);
// let kelas1 = new Room('VIP', 750000);
// let kelas2 = new Room('VIP', 350000);

module.exports = RumahSakit;