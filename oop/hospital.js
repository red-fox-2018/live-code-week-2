const Pasien = require('./patient');

class Hospital {
  constructor() {
    this.disease = ['diare', 'muntaber', 'demam berdarah', 'tipes', 'other'];
    this.totalDayTreatment = [2, 3, 4, 7, 1];
    this.possibilty = [];
    this.hargaPerRoom = [350000, 750000, 1500000];
    this.namaRoom = ['Kelas 2', 'Kelas 1', 'VIP'];
    this.pasien = []
  }
  check(disease) {
    let hargaPerRoom = [350000, 750000, 1500000];
    for (let i in this.disease) {
      if (this.disease[i] == disease) {
        this.totalDayTreatment = this.totalDayTreatment[i];
        for (let i of hargaPerRoom) {
          this.possibilty.push(i * this.totalDayTreatment)
        }
      }
    }
    this.possibilty
  }
  checkIn(patient, pilihRoom) {
    this.check(patient.diagnosis)
    patient.totalDayTreatment = this.totalDayTreatment;
    if (patient.typePatient == 'BPJS') {
      if (pilihRoom == 'VIP') {
        console.log('Mohon maaf anda layanan kamar ini tidak tersedia');
      } else {
        console.log('Pasien telah terdaftar');
        patient.budgetMax = 2000000;
        patient.room = pilihRoom;
        // this.invoices = hospital.hargaPerRoom[cari] * this.totalDayTreatment;
        this.pasien.push(patient)
      }
    } else {
      console.log('Pasien telah terdaftar');
      patient.budgetMax = 5500000;
      // this.invoices = hospital.hargaPerRoom[cari] * this.totalDayTreatment;
      patient.room = pilihRoom
      this.pasien.push(patient)
    }
  }
  checkOut(patient) {
    for (let i of this.namaRoom) {
      if(i === patient.room) {
      }
    }
    console.log('**************************INVOICE****************************');
    console.log(`Nama : ${patient.name}`);
    console.log(`Umur : ${patient.age}`);
    console.log(`Diagonosa : ${patient.diagnosis}`);
    console.log(`Telah menjalani perawatan selama ${patient.totalDayTreatment} hari`);
    console.log(`Pihak bpjs telah meng-cover sebesar Rp : ${patient.budgetMax}`);
    console.log(`Pihak bpjs telah meng-cover sebesar Rp : ${patient.budgetMax}`);
    ('*************************************************************')
  }
  showPatient() {
    let count = 0;
    // console.log(this.pasien)
    for (let i of this.pasien) {
      count++
      console.log(`${count}. ${i.name}, ${i.diagnosis} hari ke-${i.hari}`)
    }
  }
  nextDay() {
    for (let i in this.pasien) {
      this.pasien[i].hari++
      if(this.pasien[i].totalDayTreatment < this.pasien[i].hari) {
        this.checkOut(this.pasien[i])
        this.pasien.splice(i, 1);
      }
    }
  }
}

module.exports = Hospital