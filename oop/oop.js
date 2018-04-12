class RumahSakit {
  constructor() {
    this.patients = [];
    this.vip = 1500000;
    this.kelas1 = 750000;
    this.kelas2 = 350000;
  }

  getPatient(list) {
    for (var i = 0; i < list.length; i++) {
      if (!list[i].isCheckOut) {
        this.patients.push(list[i])
      }
    }
  }

  showPatient(){
    console.log('LIST PASIEN');
    for (var i = 0; i < this.patients.length; i++) {
      console.log(`${this.patients[i]._name} (${this.patients[i]._diagnosis} hari ke ${this.patients[i]._totalDayTreatment}) `);
    }
  }

  nextDay(){
    for (var i = 0; i < this.patients.length; i++) {
      this.patients[i]._totalDayTreatment++;
      if (this.patients[i]._totalDayTreatment > this.patients[i].maxTreatment) {
        console.log(`**************************INVOICE****************************`);
        console.log('Pasien:');
        console.log(`Nama: ${this.patients[i]._name}`);
        console.log(`Umur: ${this.patients[i]._age}`);
        console.log(`Diagnosa: ${this.patients[i]._diagnosis}`);
        console.log(`Telah manjalani perawatan selama ${this.patients[i].maxTreatment} hari`);
        console.log(`Total pembayaran sebesar Rp ${this.patients[i].invoice}`);
        console.log(`Pihak asuransi meng-cover sebesar Rp ${this.patients[i]._budgetMax}`);
        console.log(`Biaya administrasi yang harus dibayarkan sebesar Rp ${this.patients[i].invoice - this.patients[i]._budgetMax}`);
        console.log(`*************************************************************\n`);
        this.patients[i].isCheckOut = true;
      }
      if (this.patients[i].room === 'VIP') {
        this.patients[i].invoice += this.vip;
      } else if (this.patients[i].room === 'kelas 1') {
        this.patients[i].invoice += this.kelas1
      } else {
        this.patients[i].invoice += this.kelas2
      }
    }

  }

}

// class VIP extends RumahSakit{
//   constructor() {
//     super()
//     this._price = 1500000
//   }
// }
//
// class Kelas1 extends RumahSakit{
//   constructor() {
//     this._price = 750000
//   }
// }
//
// class Kelas2 extends RumahSakit{
//   constructor() {
//     this._price = 350000
//   }
// }


class Pasien {
  constructor(nameParam, ageParam, genderParam, diagParam) {
    this._name = nameParam;
    this._age = ageParam;
    this._gender = genderParam;
    this._diagnosis = diagParam;
    this._totalDayTreatment = 0;
    this.maxTreatment = null
    this.room = null;
    this.invoice = 0
    this.isCheckOut = true;
  }

  getTotalDayTreatment() {
    if (this._diagnosis === 'diare') {
      this.maxTreatment = 2;
    } else if (this._diagnosis === 'muntaber') {
      this.maxTreatment = 3;
    } else if (this._diagnosis === 'demam berdarah') {
      this.maxTreatment = 4;
    } else if (this._diagnosis === 'tipes') {
      this.maxTreatment = 7;
    } else {
      this.maxTreatment = 1;
    }
  }

  checkIn(roomParam) {
    if (this._typePatient === 'BPJS' && roomParam === 'VIP') {
      console.log(`Mohon maaf "${this._name}" layanan kamar ini tidak tersedia`);
    } else {
      this.room = roomParam;
      console.log(`Pasien "${this._name}" telah terdaftar`);
      this.isCheckOut = false;
    }
  }


}

class Bpjs extends Pasien{
  constructor(nameParam, ageParam, genderParam, diagParam) {
    super(nameParam, ageParam, genderParam, diagParam)
    this._typePatient = 'BPJS'
    this._budgetMax = 2000000;
  }
}

class Asuransi extends Pasien{
  constructor(nameParam, ageParam, genderParam, diagParam) {
    super(nameParam, ageParam, genderParam, diagParam)
    this._typePatient = 'asuransi'
    this._budgetMax = 5500000;
  }
}



let geaBpjs = new Bpjs('gea', 20, 'female', 'tipes')
geaBpjs.getTotalDayTreatment()
geaBpjs.checkIn('VIP')

let gulakAsuransi = new Asuransi('gulak', 22, 'male', 'demam berdarah')
gulakAsuransi.getTotalDayTreatment()
gulakAsuransi.checkIn('VIP')

let patients = [geaBpjs, gulakAsuransi]

// let treatment = null;
// for (var i = 0; i < patients.length; i++) {
//   if (!patients[i].isCheckOut) {
//     if (patients[i].room === 'VIP') {
//       treatment = new VIP()
//     } else if (patients[i].room === 'kelas 1') {
//       treatment = new Kelas1()
//     } else {
//       treatment = new Kelas2()
//     }
//   }
// }
let rumahSakit = new RumahSakit();
rumahSakit.getPatient(patients)
rumahSakit.showPatient()
console.log('\n--------------------\n');
rumahSakit.nextDay()
rumahSakit.nextDay()
rumahSakit.nextDay()
rumahSakit.nextDay()
rumahSakit.nextDay()
// rumahSakit.showPatient()


// console.log(geaBpjs);
// console.log(gulakAsuransi);

// console.log('\n------------------------------\n', rumahSakit);
