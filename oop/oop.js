/*jshint esversion:6*/

class Pasien{
  constructor(name,age,gender,diagnosis,totalDayTreatment,room,isCheckOut){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.typePatient = null;
    this.budgetMax = null;
    this.diagnosis = diagnosis;
    this.diagnosisThreat = totalDayTreatment;
    this.totalDayTreatment = totalDayTreatment;
    this.room = room;
    this.patientsBill = null;
    this.isCheckOut = isCheckOut;
  }
}

class Bpjs extends Pasien{
  constructor(name,age,gender,diagnosis,totalDayTreatment,room,isCheckOut){
    super(name,age,gender,diagnosis,totalDayTreatment,room,isCheckOut);
    this.typePatient = 'BPJS';
    this.budgetMax = 2000000;
  }
}

class Insurance extends Pasien{
  constructor(name,age,gender,diagnosis,totalDayTreatment,room,isCheckOut){
    super(name,age,gender,diagnosis,totalDayTreatment,room,isCheckOut);
    this.typePatient = 'Asuransi';
    this.budgetMax = 5500000;
  }
}

class RS{
  constructor(request){
    this.patients = [];
  }

  checkIn(request){
    if(request.typePatient === 'BPJS' && request.room === 'VIP'){
      console.log('Maaf pasien BPJS tidak dapat request room VIP');
    }else{
      if(request.room === 'VIP'){
        this.patients.push(request);
        request.patientsBill = 1500000;
      }else if(request.room === 'kelas1'){
        this.patients.push(request);
        request.patientsBill = 750000;
      }else{
        this.patients.push(request);
        request.patientsBill = 350000;
      }
      console.log('pasien sudah terdaftar');
    }
  }

  listPatient(){
    for(let i = 0 ; i < this.patients.length ; i++){
      console.log(`${i+1}. ${this.patients[i].name} pasien ini butuh dirawat ${this.patients[i].totalDayTreatment} hari`);
    }
  }

  nextDay(){
    for(let i = 0 ; i < this.patients.length ; i++){
      this.patients[i].totalDayTreatment -= 1;
      if(this.patients[i].totalDayTreatment <= 0){
        let totalbiaya = this.patients[i].patientsBill*this.patients[i].diagnosisThreat;
        let kurangbayar = totalbiaya -this.patients[i].budgetMax;
        if(kurangbayar <= 0){
          kurangbayar = 'tidak usah bayar';
        }
        console.log('**************INVOICE**************');
        console.log('PASIEN');
        console.log(`NAMA : ${this.patients[i].name}`);
        console.log(`UMUR : ${this.patients[i].age}`);
        console.log(`Diagnosa : ${this.patients[i].diagnosis}`);
        console.log(`telah menjalani perawatan selama ${this.patients[i].diagnosisThreat}`);
        console.log(`Total Pembayaran sebesar ${totalbiaya}`);
        console.log(`Pihak ${this.patients[i].typePatient} telah mengcover sebesar ${this.patients[i].budgetMax}`);
        console.log(`Biaya administrasi yang harus dibayarkan ${kurangbayar}`);
        this.patients.splice(i,1);
      }
    }
  }
}

let aliong = new Insurance('aliong',20,'lelaki','tipes',7,'VIP', false);
let joko = new Bpjs('joko',25,'lelaki','muntaber',3,'kelas1',false);
let tono = new Bpjs('tono',23,'lelaki','DBD',4,'kelas1',false);
let rs = new RS('VIP');

rs.checkIn(joko);
rs.checkIn(tono);
rs.checkIn(aliong);
rs.listPatient();
rs.nextDay();
rs.nextDay();
rs.nextDay();
rs.listPatient();
rs.nextDay();
rs.nextDay();
rs.listPatient();
