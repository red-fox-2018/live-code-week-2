
class RumahSakit {
  constructor(name,age,gender,typePatient,diagnosis) {
    this.name = name
    this.age = age
    this.gender = gender
    this.typePatient = typePatient
    this.Diagnosis = diagnosis
    this.totalDayTreatment =null
    this.room = null
    this.isCheckOut = null
    this.showPatient=this.showPatient()
  }

  checkin(input){
    console.log(input,this.typePatient);
    console.log(
      this.typePatient,input.name
    );
    if(this.typePatient =='BPJS' && input.name !=='kelas 1'){
      console.log('Mohon maaf anda layanan kamar ini tidak tersedia');
    }else if(this.typePatient =='BPJS' && input.name =='kelas 1'){
      this.room = input.name
      console.log(`Pasien telah terdaftar dan dapat room ${input.name}`);
    }else{
      this.room = input.name
      console.log(`Pasien telah terdaftar dan dapat room ${this.room}`);
    }
  }

  showPatient(){
    console.log('MASUK');

  }

}


class Bpjs extends RumahSakit{
  constructor(name,age,gender,typePatient,room,diagnosis){
    super(name,age,gender,typePatient,diagnosis)
    this.budgetMax = 2000000


  }
}

class Asuransi extends RumahSakit{
  constructor(name,age,gender,typePatient,room,diagnosis){
    super(name,age,gender,typePatient,diagnosis)
      this.budgetMax = 5500000
      this.diagnosis= diagnosis
      this.room = room

  }
}

class Room {
  constructor(name,price) {
    this.name = name
    this.price = price
  }
}

class Vip extends Room{
  constructor() {
    super('VIP',1500000)
  }
}

class Kelas1 extends Room{
  constructor() {
    super('kelas 1',1500000)
  }
}

class Kelas2 extends Room{
  constructor() {
    super('kelas 2',350000)
  }
}

// class Admin {
//   constructor() {
//
//   }
// }

module.exports = {
                  RumahSakit,
                  Bpjs,
                  Asuransi,
                  Room,
                  Vip,
                  Kelas1,
                  Kelas2
                }
