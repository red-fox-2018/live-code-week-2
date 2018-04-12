class RumahSakit {
  constructor(name,age,gender,type,diagnose){
    this.name = name
    this.age = age
    this.gender = gender
    this.typePatient = type
    this.diagnosis = diagnose
    this.totalDayTreatment = 0
    this.room = 'Belum memilih kamar'//kamar yang dipilih saat checkIn
    this.isCheckOut = 'NO'
  }
  vip(){
    this.room = 'VIP'
    this.rate = 1500000
  }
  kelas1(){
    this.room = 'Kelas 1'
    this.rate = 750000
  }
  kelas2(){
    this.room = 'Kelas 2'
    this.rate = 350000
  }
  static checkIn(patientIdentity,roomType){//untuk checkIn
    let rs = new RumahSakit()
    if (patientIdentity.typePatient == 'BPJS') {
      if (roomType !== 'Kelas 1') {
        patientIdentity.room = 'Mohon maaf layanan kamar ini tidak tersedia'
        return false
      } else {
        patientIdentity.room = roomType
        return patientIdentity
      }
    } else {
      patientIdentity.room = roomType
      return patientIdentity
    }
  }
  // static showPatient(){
  //   console.log('List Pasien :');
  //   for (var i = 0; i < this.listPatient.length; i++) {
  //     console.log(`${i+1}. ${this.listPatient[i].name} (${this.listPatient[i].diagnosis} hari ke ${this.listPatient[i].totalDayTreatment})`);
  //   }
  // }
}
class Bpjs extends RumahSakit {
  constructor (name,age,gender,type,diagnose){
    super(name,age,gender,type,diagnose)
    this.budgetMax = 2000000
    this.listPatient = []
  }
}
class Asuransi extends RumahSakit{
  constructor(name,age,gender,type,diagnose){
    super(name,age,gender,type,diagnose)
    this.budgetMax = 5500000
    this.listPatient = []
  }
}
// class Patient {
//   constructor(){
//     this.treatment = 1
//   }
//
// }
// class Diare extends Patient {
//   constructor(){
//     super()
//     this.treatment = 2
//   }
// }
// class Muntaber extends Patient {
//   constructor(){
//     super()
//     this.treatment = 3
//   }
// }
// class DemamBerdarah extends Patient {
//   constructor(){
//     super()
//     this.treatment = 4
//   }
// }
// class Tipes extends Patient {
//   constructor(){
//     super()
//     this.treatment = 7
//   }
// }
// class ListPatient {
//   constructor() {
//
//   }
// }
let pasienBpjs = new Bpjs('Adhit',21,'Male','BPJS','Diare')
let pasienAsuransi = new Asuransi('Mela',20,'Female','Asuransi','Muntaber')
var listRS = [RumahSakit.checkIn(pasienBpjs,'Kelas 1'),RumahSakit.checkIn(pasienAsuransi,'Kelas 2')]
//untuk checkIn tambahkan anggota array listRS
class Patient {
  constructor(listRS) {
    this.list = listRS
  }
  showPatient (){
    console.log('LIST PASIEN :');
    let listRumahSakit = []
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].room !== 'Mohon maaf layanan kamar ini tidak tersedia') {
        listRumahSakit.push(this.list[i])
      }
    }
    for (var i = 0; i < listRumahSakit.length; i++) {
      console.log(`${i+1}. ${listRumahSakit[i].name} (${listRumahSakit[i].diagnosis} hari ke ${listRumahSakit[i].totalDayTreatment})`);
    }
    return this.list = listRumahSakit
  }
  nextDay(){
    let list = this.list
    let total = 0
    for (var i = 0; i < list.length; i++) {
      list[i].totalDayTreatment++
      total = list[i].totalDayTreatment *
    }
  }
}
let showPatient = new Patient(listRS)
showPatient.showPatient()//untuk show patient
// console.log(pasienBpjs);
// RumahSakit.showPatient()

// console.log(pasienAsuransi);
