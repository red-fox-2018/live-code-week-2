class Patient {
  constructor(name, age, gender, typePatient, budgetMax, diagnosis, totalDayTreatment, room, isCheckOut) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.typePatient = typePatient;
    this.budgetMax = budgetMax;
    this.diagnosis = diagnosis;
    this.totalDayTreatment = totalDayTreatment;
    this.room = room;
    this.isCheckOut = isCheckOut;
  }
}

class RumahSakit {
  constructor() {
    this.listPatient = [];
  }

  checkIn(patient) {
    if (patient.typePatient == 'bpjs' && patient.room == 'VIP') {
      console.log('Mohon maaf anda layanan kamar ini tidak tersedia');
    } else {
      this.listPatient.push(patient);
      console.log('Pasien telah terdaftar');
    }
  }

  showPatient() {
    console.log('LIST PASIEN:');
    for (var i = 0; i < this.listPatient.length; i++) {
      console.log(`${i + 1}. ${this.listPatient[i].name} (${this.listPatient[i].diagnosis} hari ke ${this.listPatient[i].totalDayTreatment})`);
    }
  }

  nextDay() {
    
  }
}

var bpjs1 = new Patient ('aliong', 49, 'male', 'bpjs', 2000000, 'diare', 1, 'VIP', false);
var bpjs2 = new Patient ('asung', 39, 'male', 'bpjs', 2000000, 'Muntaber', 3, 'kelas 1', false);
var asuransi1 = new Patient ('akhiong', 42, 'male', 'asuransi', 5500000, 'tipes', 4, 'VIP', false);
var asuransi2 = new Patient ('ayung', 56, 'male', 'asuransi', 5500000, 'Demam', 4, 'VIP', false);
var rumahSakit = new RumahSakit();

console.log(bpjs1);
console.log(rumahSakit.checkIn(bpjs1));
console.log(rumahSakit.checkIn(bpjs2));
console.log(rumahSakit.showPatient());
