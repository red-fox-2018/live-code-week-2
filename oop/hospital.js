/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/

class Hospital {
  constructor() {
    this.listPatiens = [];
  }

  checkIn(objPatient) {
    if (objPatient.typePatient == 'BPJS' && objPatient.room == 'VIP') {
      console.log('Mohon maaf anda layanan kamar ini tidak tersedia');
    }
        this.listPatiens.push(objPatient);
        console.log(`Pasien berhasil terdaftar`);
  }

  showPatienT() {
    let counter = 1;
    for (let i = 0; i < this.listPatiens.length; i++) {
      let patient = this.listPatiens[i];
      console.log(`${counter}. ${patient.name} (${patient.diagnosis} hari ke ${patient.totalDayTreatment})`);
      counter++;
    }
  }

  nexDay(day) {
    let patient = this.listPatiens;
    let totalBiaya = 0;
    let counter = 1;

    for (let j = 0; j < day; j++) {
      for (let i = 0; i < patient.length; i++) {
        if (patient[i].room == 'VIP') {
          totalBiaya += 1500000;
        } else if (patient[i].room == 'kelas 1') {
          totalBiaya += 750000;
        } else if (patient[i].room == 'kelas 2') {
          totalBiaya += 350000;
        }
        if (counter == day) {
          return `
                    **************************INVOICE****************************
                    Pasien:
                     Nama: ${patient[i].name}
                     Umur: ${patient[i].age}
                     Diagnosa: ${patient[i].diagnosis}
                     telah menjalani perawatan selama ${patient[i].totalDayTreatment} hari.
                     Total Pembayaran sebesar Rp ${totalBiaya}
                     Pihak ${patient[i].typePatient} telah meng-cover sebesar Rp ${patient[i].budgetMax}.
                     Biaya administrasi yang harus dibayarkan sebesar Rp ${totalBiaya -= patient[i].budgetMax}
                    *************************************************************
                    `;
        }
        counter++;
      }
    }
  }
}

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
    super('Ton', 25, 'Male', 'Diare', 'VIP');
    this.typePatient = 'BPJS';
    this.budgetMax = 10000000;
  }
}

class Asuransi extends Patient {
  constructor() {
    super('Santi', 25, 'female', 'Tipes', 'VIP');
    this.typePatient = 'Asuransi';
    this.budgetMax = 20000000;
  }
}

let hospital = new Hospital();
let budi = new Bpjs();
let santi = new Asuransi();
hospital.checkIn(santi);
hospital.showPatienT();
console.log(hospital.nexDay(6));

// module.exports = Hospital;
