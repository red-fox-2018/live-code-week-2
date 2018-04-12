class Hospital {
  constructor() {
    this.patients = []
  }

  checkIn(newPatient) {
    if(newPatient.typePatient == 'BPJS' && newPatient.room == "vip") {
      console.log('Mohon maaf layanan kamar  tidak tersedia');
    } else {
      this.patients.push(newPatient)
      console.log('Pasien telah terdaftar');
    }
  }

  showPatients() {
    console.log('LIST PASIEN: ');
    for(let i in this.patients) {
      if(this.patients[i].isCheckOut === false) {
        console.log(`${parseInt(i)+1}. ${this.patients[i].name} (${this.patients[i].diagnosis})`)
      }
    }
  }

  nextDay(day) {
    var price;
    var name;
    var age;
    console.log('**********INVOICE***********');
    for(var i = 0; i < day; i++) {
      for(var j in this.patients) {
        if(this.patients[j].room === 'vip') {
          price = 1500000 * this.patients[j].totalDayTreatment
        } else if(this.patients[j].room === 'kelas 1') {
          price = 750000 * this.patients[j].totalDayTreatment
        } else if(this.patients[j].room === 'kelas 2') {
          price = 350000 * this.patients[j].totalDayTreatment
        }
        if(day >= this.patients[j].totalDayTreatment) {
          name = this.patients[j].name
          var totalPayment = Math.abs (this.patients[j].budgetMax - price)
          this.patients[j].isCheckOut = true
           console.log(`Pasien: Nama: ${this.patients[j].name}, Umur; ${this.patients[j].age}, Diagnosa:  ${this.patients[j].diagnosis}, telah menjalani perawatan selama ${this.patients[j].totalDayTreatment} hari. Total Pembayaran sebesar Rp.${price}. Pihak ${this.patients[j].typePatient} telah meng-cover sebesar ${this.patients[j].budgetMax}. Biaya administrasi yang harus dibayarkan sebesar ${totalPayment}`)
        }
      }
    }
  }
}

class Patient {
  constructor(objPatient) {
    this.name = objPatient.name
    this.age = objPatient.age
    this.gender = objPatient.gender
    this.typePatient = objPatient.typePatient
    this.budgetMax = this.budgetMax()
    this.diagnosis = objPatient.diagnosis
    this.totalDayTreatment = this.totalDayTreatment()
    this.room = objPatient.room
    this.isCheckOut = false
  }

  budgetMax() {
    if(this.typePatient === 'BPJS') {
      this.budgetMax = 2000000
      return this.budgetMax
    } else {
      this.budgetMax = 5500000
      return this.budgetMax
    }
  }

  totalDayTreatment() {
    if(this.diagnosis === 'Diare') {
      this.totalDayTreatment = 2
      return this.totalDayTreatment
    } else if(this.diagnosis === 'Muntaber') {
      this.totalDayTreatment = 3
      return this.totalDayTreatment
    } else if(this.diagnosis === 'Demam Berdarah') {
      this.totalDayTreatment = 4
      return this.totalDayTreatment
    } else if(this.diagnosis === 'Tipes') {
      this.totalDayTreatment = 7
      return this.totalDayTreatment
    } else {
      this.totalDayTreatment = 1
      return this.totalDayTreatment
    }
  }
}

var hospital = new Hospital()
var jono = new Patient({name: "Jono", age: "30", gender: "male", typePatient: "BPJS", diagnosis: 'Diare', room: "vip"})
var gea = new Patient({name: "Gea", age: "23", gender: "female", typePatient: "Asuransi", diagnosis: 'Tipes', room: "vip"})
var bambang = new Patient({name: "Bambang", age: "28", gender: "male", typePatient: "BPJS", diagnosis: 'Fraktura hepar', room: "kelas 2"})
var lala = new Patient({name: "Lala", age: "20", gender: "female", typePatient: "Asuransi", diagnosis: 'Demam Berdarah', room: "vip"})

hospital.checkIn(jono)
hospital.checkIn(gea)
hospital.checkIn(bambang)
hospital.checkIn(lala)
hospital.showPatients();
hospital.nextDay(5);
