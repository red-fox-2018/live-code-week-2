"use strict"

class Patient {
  constructor(name, age, gender, diagnosis, room){
    this.name = name
    this.age = age
    this.gender = gender
    this.typePatient = ''
    this.budgetMax = ''
    this.diagnosis = diagnosis
    this.totalDayTreatment = 1
    this.totalDayNeeded = 0
    this.room = room
    this.isCheckOut = false
  }

  checkTotalDayNeeded(){
    if(this.diagnosis == 'Diare'){
      this.totalDayNeeded = 2
    } else if(this.diagnosis == 'Muntaber'){
        this.totalDayNeeded = 3
    } else if(this.diagnosis == 'Demam Berdarah'){
        this.totalDayNeeded = 4
    } else if(this.diagnosis == 'Tipes'){
        this.totalDayNeeded = 7
    } else {
        this.totalDayNeeded = 1
    }
  }

}

class BPJS extends Patient {
  constructor(name, age, gender, diagnosis, room){
    super(name, age, gender, diagnosis, room)
    this.typePatient = 'BPJS'
    this.budgetMax = 2000000
  }
}

class Asuransi extends Patient {
  constructor(name, age, gender, diagnosis, room) {
    super(name, age, gender, diagnosis, room)
    this.typePatient = 'Asuransi'
    this.budgetMax = 5500000
  }
}

module.exports = { BPJS, Asuransi}
