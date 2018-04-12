class Hospital {
  constructor() {
    this.patients = []
  }

  showPatients(){

    console.log(`***************************** LIST PASIEN *****************************`);

    for (var i = 0; i < this.patients.length; i++) {

      console.log(`${i+1}. ${this.patients[i].name} (${this.patients[i].diagnosis} hari ke ${this.patients[i].totalDayTreatment})`);

    }

  }

  checkIn(patient){
    // console.log(`Pasien telah terdaftar`);
    this.patients.push(patient)
  }

  deletePatient(){

    for (var i = 0; i < this.patients.length; i++) {

      if (this.patients[i].isCheckOut == true) {

        this.patients.splice(i, 1)

      }

    }

  }

}

class Patient {
  constructor(name, age, gender, diagnosis, room) {
    this.name = name
    this.age = age
    this.gender = gender
    this.diagnosis = diagnosis
    this.totalDayTreatment = 0
    this.room = room
    this.maxDay = this.checkDiagnose()
    this.budgetMax = this.checkRoom()
    this.isCheckOut = false
  }

  checkDiagnose(){

    if (this.diagnosis == 'diare') {

      return 2

    } else if (this.diagnosis == 'muntaber') {

      return 3

    } else if (this.diagnosis == 'demam berdarah') {

      return 4

    } else if (this.diagnosis == 'tipes') {

      return 7

    } else {

      return 1

    }
  }

  checkRoom(){

    if (this.typePatient != 'bpjs') {

      if (this.room == 'kelas 1') {
        return this.maxDay * 750000
      } else if (this.room == 'kelas 2') {
        return this.maxDay * 350000
      } else if ('VIP') {
        return this.maxDay * 1500000
      }

    } else {

      if (this.room == 'kelas 1') {
        return this.maxDay * 750000
      } else if (this.room == 'kelas 2') {
        return this.maxDay * 350000
      } else if ('VIP') {
        return console.log(`Mohon maaf anda layanan kamar ini tidak tersedia`);
      }

    }

  }

  checkOut(){
    this.isCheckOut = true
  }

  isCheckOut(){
    return this.isCheckOut
  }

  nextDay(){
    this.totalDayTreatment += 1

    if (this.totalDayTreatment == this.maxDay) {
      this.checkOut()
      this.invoice()
      return hospital.deletePatient()
    }

    // return this

  }

  invoice(){

    const budget = this.budgetMax - this.cover > 0 ? this.budgetMax - this.cover : 0

    console.log(`
      ******************************INVOICE******************************
      Pasien:
        Nama: ${this.name}
        Umur: ${this.age}
        Diagnosa: ${this.diagnosis}
        telah menjalani perawatan selama ${this.totalDayTreatment} hari
      Total Pembayaran sebesar Rp. ${this.budgetMax}
        pihak bpjs telah meng-cover sebesar ${this.cover}
        Biaya administrasi yang harus dibayarkan sebesar ${budget}
      *******************************************************************
      `);
  }

}

class BpjsPatient extends Patient{
  constructor(name, age, gender, diagnosis, room) {
    super(name, age, gender, diagnosis, room)
    this.typePatient = 'bpjs'
    this.cover = 2000000
  }
}

class AsurancePatient extends Patient{
  constructor(name, age, gender, diagnosis, room) {
    super(name, age, gender, diagnosis, room)
    this.typePatient = 'asuransi'
    this.cover = 5500000
  }
}

const dia = new BpjsPatient('Dia', 17, 'female', 'muntaber', 'kelas 1')
const poiasd = new BpjsPatient('Rani', 20, 'female', 'diare', 'kelas 2')
const asd = new AsurancePatient('Rino', 49, 'male', 'tipes', 'VIP')

const hospital = new Hospital()

hospital.checkIn(dia)
hospital.checkIn(poiasd)
hospital.checkIn(asd)

dia.nextDay()
dia.nextDay()
dia.nextDay()

asd.nextDay()
asd.nextDay()
asd.nextDay()
// asd.nextDay()
// asd.nextDay()
// asd.nextDay()
// asd.nextDay()

poiasd.nextDay()
// poiasd.nextDay()

hospital.showPatients()
