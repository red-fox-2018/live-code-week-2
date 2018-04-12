class Hospital {

    constructor(){

        this.dataPatiens = []
    }

    checkIn(objPatient) {

        if(objPatient.typePatient == 'BPJS' && objPatient.room == 'VIP') {

            console.log('Mohon maaf anda layanan kamar ini tidak tersedia');
        }else if(objPatient.typePatient == 'Asuransi') {

            if(objPatient.diagnosis == 'Diare') {

                objPatient.totalDayTreatment = 2
            } else if(objPatient.diagnosis == 'Muntaber') {

                objPatient.totalDayTreatment = 3
            } else if(objPatient.diagnosis == 'Demam Berdarah') {

                objPatient.totalDayTreatment = 4
            } else if(objPatient.diagnosis == 'Tipes') {

                objPatient.totalDayTreatment = 7
            } else {

                objPatient.totalDayTreatment = 1
            }

            this.dataPatiens.push(objPatient)
            console.log('Pasien telah terdaftar');   
        }  else{

            if(objPatient.diagnosis == 'Diare') {

                objPatient.totalDayTreatment = 2
            } else if(objPatient.diagnosis == 'Muntaber') {

                objPatient.totalDayTreatment = 3
            } else if(objPatient.diagnosis == 'Demam Berdarah') {

                objPatient.totalDayTreatment = 4
            } else if(objPatient.diagnosis == 'Tipes') {

                objPatient.totalDayTreatment = 7
            } else {

                objPatient.totalDayTreatment = 1
            }

            this.dataPatiens.push(objPatient)
            console.log("Pasien telah terdaftar");
        } 
    }

    get showPatienT() {

        let counter = 1

        for (let i = 0; i < this.dataPatiens.length; i++) {
            
            let patient = this.dataPatiens[i]

            console.log(`${counter}. ${patient.name} (${patient.diagnosis} hari ke ${patient.totalDayTreatment})`);   
            counter++
        }
    }

    nexDay (day) {

        let patient =  this.dataPatiens
        let totalBayar = 0
        let counter = 1
 
        for (let j = 0; j < day; j++) {
         
            for (let i = 0; i < patient.length; i++) {
                
                let temp = patient
                if (patient[i].room == 'VIP') {

                    totalBayar += 1500000
                } else if(patient[i].room == 'kelas 1') {

                    totalBayar += 750000
                } else if(patient[i].room == 'kelas 2') {

                  totalBayar +=350000
                }

                if (counter == day) {
                    patient.splice(patient[i],1)
                    return `
                    **************************INVOICE****************************
                    Pasien:
                     Nama: ${temp[i].name}
                     Umur: ${temp[i].age}
                     Diagnosa: ${temp[i].diagnosis}
                     telah menjalani perawatan selama ${temp[i].totalDayTreatment} hari.
                    Total Pembayaran sebesar Rp ${totalBayar}
                     Pihak ${temp[i].typePatient} telah meng-cover sebesar Rp ${temp[i].budgetMax}.
                     Biaya administrasi yang harus dibayarkan sebesar Rp ${totalBayar -= temp[i].budgetMax}
                    *************************************************************
                    `

                }

                counter++   
            }
        }
    }
}

class Patient {

    constructor(name,age,gender,diagnosis,room){

        this.name = name
        this.age = age
        this.gender = gender
        this.typePatient = ''
        this.budgetMax = 0
        this.diagnosis = diagnosis
        this.totalDayTreatment = null
        this.room = room
        this.isCheckOut = false
    }
}


class BPJS extends Patient {

    constructor(name,age,gender,diagnosis,room) {

        super(name,age,gender,diagnosis,room)
        this.typePatient = 'BPJS'
        this.budgetMax = 2000000
    }
}

class Asuransi extends Patient {

    constructor(name,age,gender,diagnosis,room) {

        super(name,age,gender,diagnosis,room)
        this.typePatient = 'Asuransi'
        this.budgetMax = 5500000
    }
}

let hospital = new Hospital()
let tono = new BPJS('Tono',25,'Pria','Diare','VIP')
let jono = new Asuransi('Tono',25,'Pria','Muntaber','VIP')
// console.log(tono)
// console.log(jono);
hospital.checkIn(jono)
hospital.showPatienT
console.log(hospital.nexDay(4))
