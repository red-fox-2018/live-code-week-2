const {Pasien, PasienAsuransi, PasienBPJS} = require('./pasien');
const {Room, VIP, Kelas1, Kelas2} = require('./room');

class RumahSakit {
  constructor() {
    this.room = this.addRoom()
    this.pasien = []
  }

  addRoom(){
    let rooms=[]
    rooms.push(new VIP(), new Kelas1(), new Kelas2())
    return rooms
  }

  checkIn(objPasien){
    if(objPasien.typePatient === "BPJS" && objPasien.room === "VIP"){
      console.log('Mohon maaf anda layanan kamar ini tidak tersedia');
    }else{
      this.pasien.push(objPasien)
      console.log('Pasien telah terdaftar');
    }
  }

  maxDayTreatment(diagnosis){
    let totalDayTreatment;
    switch (diagnosis.toLowerCase()) {
      case "diare":
        totalDayTreatment = 2
        break;
      case "muntaber":
        totalDayTreatment = 3
        break;
      case "demam Berdarah":
        totalDayTreatment = 4
        break;
      case "tipes":
        totalDayTreatment = 7
        break;
      default: totalDayTreatment = 1
    }
    return totalDayTreatment
  }

  showPatient(){
    console.log("Daftar Pasien Rumah Sakit");
    this.pasien.forEach((dataPasien, idx)=>{
      console.log(`${idx+1}. ${dataPasien.name} (sakit ${dataPasien.diagnosis} hari ke ${dataPasien.totalDayTreatment})`);
    })
  }

  nextDay(objPasien){
    let pasienRegister = this.pasien.includes(objPasien)
    if(pasienRegister){
      let maxDay = this.maxDayTreatment(objPasien.diagnosis)

      if(objPasien.totalDayTreatment < maxDay){
        objPasien.totalDayTreatment+=1
        this.showPatient()
      }else{
        let room = this.room.find((room) => objPasien.room === room.class)
        let totalBayar = room.biayaPerhari * objPasien.totalDayTreatment

        this.invoice(objPasien, totalBayar) //cetak invoice

        let getIdxPasien = this.pasien.indexOf(objPasien)
        this.pasien.splice(getIdxPasien,1)// menghapus daftar pasien
      }

    }else{
      console.log("Pasien Tidak Terdaftar");
    }
  }

  invoice(objPasien, totalBayar){
    let sisaBayar = totalBayar - objPasien.budgetMax
    let coverBiaya = objPasien.budgetMax;
    if(totalBayar < objPasien.budgetMax){
      coverBiaya = totalBayar
    }
    if(sisaBayar < 0){
      sisaBayar = 0
    }
    console.log(`Pasien:
      nama : ${objPasien.name}
      Umur: ${objPasien.age}
      Diagnosa: ${objPasien.diagnosis}
      telah menjalani perawatan sebanyak ${objPasien.totalDayTreatment} hari.
      Total Pembayaran sebesar ${totalBayar} pihak ${objPasien.typePatient} telah meng-cover sebesar Rp ${coverBiaya}.
      Biaya administrasi yang harus dibayarkan sebesar Rp ${sisaBayar}`);
  }

}



let rumahSakit = new RumahSakit()
let pasienBPJS = new PasienBPJS({
  name: "Dia",
  age: 17,
  gender: "wanita",
  diagnosis: "muntaber",
  room: "Kelas1"
})

let pasienAsuransi = new PasienAsuransi({
  name: "Luoi",
  age: 20,
  gender: "Laki-laki",
  diagnosis: "Tipes",
  room: "Kelas1"
})
// console.log(pasienAsuransi);
// console.log(pasienBPJS);
rumahSakit.checkIn(pasienAsuransi)
rumahSakit.checkIn(pasienBPJS)
for (var i = 0; i < 8; i++) {
rumahSakit.nextDay(pasienAsuransi)
// rumahSakit.nextDay(pasienBPJS)
}
