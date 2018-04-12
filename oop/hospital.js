"use strict"
const BPJS = require('./patient.js').BPJS;
const Asuransi = require('./patient.js').Asuransi;

class Hospital {
  constructor(roomName){
    this.roomName = roomName
    this.patients = []
  }

  checkIn(objPatient){
    if(objPatient.typePatient == 'BPJS' && objPatient.room == 'VIP'){
      return 'Mohon maaf layanan kamar ini tidak tersedia'
    } else {
      this.patients.push(objPatient)
      return 'Pasien telah terdaftar'
    }
  }

  showPatient(){
    console.log('List Patient :');

    for(let i = 0; i < this.patients.length;i++){
      console.log(`${i+1}. ${this.patients[i].name} (${this.patients[i].diagnosis} hari ke ${this.patients[i].totalDayTreatment})`);
    }
  }

  nextDay(patient){

    if( patient.totalDayTreatment > patient.totalDayNeeded){
      patient.isCheckOut = true
      console.log('**************************INVOICE****************************');
      console.log('Pasien:');
      console.log(`Nama: ${patient.name}`);
      console.log(`Umur: ${patient.age}`);
      console.log(`Diagnosa: ${patient.diagnosis}`);
      console.log(`telah menjalani perawatan selama ${patient.totalDayNeeded} hari`);
      console.log(`Total Pembayaran sebesar Rp ${this.price}`);
      console.log(`Pihak ${patient.typePatient} telah meng-cover sebesar Rp ${patient.budgetMax}`);
      console.log(`Biaya administrasi yang harus dibayarkan sebesar Rp ${this.price - patient.budgetMax}`);
      console.log('*************************************************************');

      let newPatientList = []
      for(let i = 0; i < this.patients.length; i++){
        if(this.patients[i].name != patient.name){
          newPatientList.push(this.patients[i])
        }
      }
      this.patients = newPatientList

    } else {
      patient.totalDayTreatment += 1
      this.price += this.price
    }
  }

}

class VIP extends Hospital {
  constructor(){
    super('VIP')
    this.price = 1500000
  }
}

class Class1 extends Hospital {
  constructor(){
    super('Class1')
    this.price = 750000
  }
}

class Class2 extends Hospital {
  constructor(){
    super('Class2')
    this.price = 350000
  }
}


//================Create Patient============
let patient_1 = new Asuransi('Gea', 17, 'Perempuan', 'Tipes', 'VIP')
patient_1.checkTotalDayNeeded()

let patient_2 = new Asuransi('Lukman', 20, 'Laki-laki', 'Demam Berdarah', 'VIP')
patient_2.checkTotalDayNeeded()

let patient_3 = new BPJS('Faisal', 24, 'Laki-laki', 'Diare', 'Class1')
patient_3.checkTotalDayNeeded()

let patient_4 = new BPJS('Dea', 17, 'Perempuan', 'Muntaber', 'Class1')
patient_4.checkTotalDayNeeded()


//=================Check In=================

let vip = new VIP()
vip.checkIn(patient_1)
vip.checkIn(patient_2)
// vip.showPatient()


let class1 = new Class1()
class1.checkIn(patient_3)
class1.checkIn(patient_4)
class1.showPatient()

while(patient_1.isCheckOut == false){
  vip.nextDay(patient_1)
}

vip.nextDay(patient_2)
vip.nextDay(patient_2)
vip.showPatient()
