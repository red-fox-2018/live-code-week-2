class RumahSakit{
  constructor(){
    this.patientsVIP = []
    this.patiensFirstClass = []
    this.patiensSecondClass = []
  }
  checkIn(patient,room){
    console.log('------',patient.totalDayTreatment+1)
    if(patient.typePatient === 'BPJS' && room === 'VIP'){
      console.log('mohon maaf anda layanan kamar ini tidak tersedia')
    }else if(patient.typePatient === 'Asuransi' && room === 'VIP'){
      patient.totalDayTreatment ++
      this.patientsVIP.push(patient)
    }else if(room === 'Kelas 1'){
      patient.totalDayTreatment = patient.totalDayTreatment + 1
      this.patiensFirstClass.push(patient)
    }else{
      patient.totalDayTreatment = patient.totalDayTreatment + 1
      this.patiensSecondClass.push(patient)
    }
    console.log('patient telah terdaftar')
    patient.room = room
  }
  showPatient(){
    console.log('LIST PASIEN')
    console.log('VIP room')
    if(this.patientsVIP.length === 0){
      console.log('tidak ada pasien di ruangan ini')
    }else{
      this.patientsVIP.forEach((data,idx)=>{
        console.log(`${idx+1}. ${data.name} (${data.diagnosis.name} hari ke ${data.totalDayTreatment})`)
      })
    }

    console.log('Kelas 1')
    if(this.patiensFirstClass.length === 0){
      console.log('tidak ada pasien di ruangan ini')
    }else{
      this.patiensFirstClass.forEach((data,idx)=>{
        console.log(`${idx+1}. ${data.name} (${data.diagnosis.name} hari ke ${data.totalDayTreatment})`)
      })
    }

    console.log('Kelas 2')
    if(this.patiensSecondClass.length === 0){
      console.log('tidak ada pasien di ruangan ini')
    }else{
      this.patiensSecondClass.forEach((data,idx)=>{
        console.log(`${idx+1}. ${data.name} (${data.diagnosis.name} hari ke ${data.totalDayTreatment})`)
      })
    }
  }
  nextDay(){
    if(this.patientsVIP.length > 0){
      this.patientsVIP.forEach((data,idx)=>{
        data.totalDayTreatment ++
        if(data.totalDayTreatment > data.diagnosis.dayTreatment){
          data.isCheckOut = true
          this.getInvoice(data)
          this.patientsVIP.splice(idx,1)
        }
      })
    }
    if(this.patiensFirstClass.length > 0){
      this.patiensFirstClass.forEach((data,idx)=>{
        data.totalDayTreatment ++
        if(data.totalDayTreatment > data.diagnosis.dayTreatment){
          data.isCheckOut = true
          this.getInvoice(data)
          this.patiensFirstClass.splice(idx,1)
        }
      })
    }

    if(this.patiensSecondClass.length > 0){
      this.patiensSecondClass.forEach((data,idx)=>{
        data.totalDayTreatment ++
        if(data.totalDayTreatment > data.diagnosis.dayTreatment){
          data.isCheckOut = true
          this.getInvoice(data)
          this.patiensSecondClass.splice(idx,1)
        }
      })
    }

  }
  getInvoice(patient){
    let listHarga = [['VIP',1500000],['Kelas 1',750000],['Kelas 2',350000]]
    let bayar = listHarga.filter(harga=>harga[0]===patient.room)
    let totalBayar = bayar[0][1] * (patient.totalDayTreatment-1)
    let bayarDiri =0
    if(totalBayar < patient.budgetMax){
      bayarDiri = 0
    }else{
      bayarDiri = totalBayar - patient.budgetMax
    }

    console.log('**************************INVOICE****************************')
    console.log('Pasien')
    console.log(`Nama : ${patient.name}`)
    console.log(`Umur : ${patient.age}`)
    console.log(`Diagnosa : ${patient.diagnosis.name}`)
    console.log(`telah menjalani perawatan selama ${patient.totalDayTreatment-1} hari`)
    console.log(`Total Pembayaran sebesar Rp${totalBayar}`)
    console.log(`Pihak ${patient.typePatient} telah meng-cover sebesar Rp${patient.budgetMax}`)
    console.log(`Biaya administrasi yang harus dibayarkan sebesar Rp${bayarDiri}`)

  }
}

class Patient{
  constructor(name,age,gender,typePatient,budgetMax,diagnosis){
    this.name = name
    this.age = age
    this.gender = gender
    this.typePatient = typePatient
    this.budgetMax = budgetMax
    this.diagnosis = diagnosis
    this.totalDayTreatment = 0
    this.room = ''
    this.isCheckOut = false
  }
}



class Bpjs extends Patient{
  constructor(name,age,gender,diagnosis){
    super(name,age,gender,'BPJS',2000000,diagnosis)
  }
}

class Asuransi extends Patient{
  constructor(name,age,gender,diagnosis){
    super(name,age,gender,'Asuransi',5500000,diagnosis)
  }
}

class Penyakit{
  constructor(name,dayTreatment){
    this.name = name
    this.dayTreatment=dayTreatment
  }
}

class Diare extends Penyakit{
  constructor(){
    super('diare',2)
  }
}

class Muntaber extends Penyakit{
  constructor(){
    super('muntaber',3)
  }
}

class DemamBerdarah extends Penyakit{
  constructor(){
    super('demam berdarah',4)
  }
}

class Tipes extends Penyakit{
  constructor(){
    super('tipes',7)
  }
}

class Other extends Penyakit{
  constructor(name){
    super(name,1)
  }
}

let sukaHati = new RumahSakit()
let muntaber = new Muntaber()
let tipes = new Tipes()
let dbd = new DemamBerdarah()
let diare = new Diare()
let galau = new Other('galau')
let udin = new Bpjs ('udin',38,'male',muntaber)
let kabayan = new Bpjs ('kabayan',90,'male',diare)
let scarlett = new Asuransi ('scarlett',30,'female',galau)
let john = new Asuransi ('john',40,'male',dbd)

sukaHati.checkIn(udin,'VIP')
sukaHati.checkIn(kabayan,'Kelas 1')
sukaHati.checkIn(john,'Kelas 1')
sukaHati.checkIn(scarlett,'VIP')
console.log(udin)
console.log(kabayan)
console.log(scarlett)
console.log(john)
console.log(sukaHati)
sukaHati.showPatient()
sukaHati.nextDay()
sukaHati.showPatient()
sukaHati.nextDay()
sukaHati.nextDay()
sukaHati.showPatient()
