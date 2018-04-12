const RumahSakit = require ('./rumahSakit').RumahSakit

class Patient {
    constructor(name, age, gender, typePatient, budgetMax) {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.typePatient = typePatient, 
        this.budgetMax = budgetMax,
        this.diagnosis = ''
        this.totalDayTreatment = 0,
        this.room = ''
        this.isCheckOut = ''
    }

    checkIn(pasien, room, diagnosis){
        let tipePasien = pasien.typePatient 
        if( tipePasien == 'BPJS' && room == 'VIP'){
            console.log('Mohon maaf,layanan kamar ini tidak tersedia')
        }
        else if(tipePasien == 'Asuransi'){
            this.continueChekin(pasien, room, diagnosis)
        }
        else {
            this.continueChekin(pasien, room, diagnosis)
        }
    }

    continueChekin(pasien, room, diagnosis){
        this.room = room
        this.diagnosis = diagnosis

        this.totalDayTreatment = this.ekspektasiTreatment(diagnosis)    
        
        let rumahSakit = new RumahSakit()
        // console.log(rumahSakit)
        rumahSakit.Patients.push(pasien)
        // console.log(rumahSakit)
        console.log(`Pasien atas nama ${pasien.name} telah terdaftar dengan diagnosis ${pasien.diagnosis}`)
    }

    ekspektasiTreatment(diagnosis){
        let jmlEkspektasiHariTreatment = 0
        if(diagnosis == 'Diare'){
            jmlEkspektasiHariTreatment = 2
        }
        else if(diagnosis == 'Muntaber'){
            jmlEkspektasiHariTreatment = 3
        }
        else if(diagnosis == 'Demam Berdarah'){
            jmlEkspektasiHariTreatment = 4
        }
        else if(diagnosis == 'Tipes'){
            jmlEkspektasiHariTreatment = 7
        }
        else {
            jmlEkspektasiHariTreatment = 1
        }
        
        return jmlEkspektasiHariTreatment
    }


}

class PasienBPJS extends Patient {
    constructor(name,age,gender){
        super()
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.typePatient = 'BPJS'
        this.budgetMax = 2000000
    }
}

class PasienAsuransi extends Patient {
    constructor(name,age,gender){
        super()
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.typePatient = 'Asuransi'
        this.budgetMax = 5500000
    }
}

module.exports = {
    Patient,
    PasienBPJS,
    PasienAsuransi
}