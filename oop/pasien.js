class Pasien {
  constructor(typePatient,name, age, gender, diagnosis, room) {
    this.name = name
    this.age = age
    this.gender = gender
    this.typePatient = typePatient
    this.budgetMax = this.setbudgetMax(typePatient)
    this.diagnosis = diagnosis
    this.totalDayTreatment = 0
    this.room = room
    this.isCheckOut = false
  }

  setbudgetMax(){
    let budget;
    if(this.typePatient === "Asuransi"){
      budget = 5500000
    }else if(this.typePatient === "BPJS"){
      budget = 2000000
    }
    return budget
  }

}

class PasienAsuransi extends Pasien {
  constructor(objPasien) {
    super("Asuransi", objPasien.name, objPasien.age, objPasien.gender, objPasien.diagnosis, objPasien.room)
  }
}

class PasienBPJS extends Pasien {
  constructor(objPasien) {
    super("BPJS", objPasien.name, objPasien.age, objPasien.gender, objPasien.diagnosis, objPasien.room)
  }
}

module.exports = {
  Pasien,
  PasienAsuransi,
  PasienBPJS
};
