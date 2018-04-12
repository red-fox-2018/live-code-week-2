class Patient{
    constructor(){
    this.name = ''
    this.age = 0;
    this.gender = ''
    this.typePatient = ''
    this.budgetMax = 0
    this.diagnosis = ''
    this.totalDayTreatment = 0
    this.room = ''
    this.isCheckOut = false
    }
}

class PatientBPJS extends Patient{
    constructor(name,age,gender,typePatient,diagnosis,room){
        super()
        this.name = name
        this.age = age
        this.gender = gender
        this.typePatient = typePatient
        this.budgetMax = 2000000
        this.diagnosis = diagnosis
        this.totalDayTreatment = 0
        this.room = room
        this.isCheckOut = false
    }
}

class PatientAsuransi extends Patient{
    constructor(name,age,gender,typePatient,diagnosis,room){
        super()
        this.name = name
        this.age = age
        this.gender = gender
        this.typePatient = typePatient
        this.budgetMax = 550000
        this.diagnosis = diagnosis
        this.totalDayTreatment = 0
        this.room = room
        this.isCheckOut = false
    }
}




class RumahSakit{
    constructor(){
        this.roomAsuransi = ['VIP','Kelas 1','Kelas 2']
        this.roomBPJS = ['Kelas 1','Kelas 2']
        this.biayaAdministrasi = 250000
        this.patient = []
        this.JenisPenyakityangditanganirumahsakit = ['diare','muntaber','demam berdarah','tipes']
        this.lamanyapenanganan = [2,3,4,7]
    }

    ShowPatient (){
        let number = 1;
        let count = 0;
        // console.log(this.patient)
        if(this.patient !== undefined){
            console.log('List Patient: ')
            console.log('==============')
            for(let i=0;i<this.patient.length;i++){
                if(this.patient[i].isCheckOut === false){
                    console.log(`${number}. ${this.patient[i].name} (${this.patient[i].diagnosis} hari ke ${this.patient[i].totalDayTreatment})`)
                    number++
                    count++
                }
            }
            if(count === 0){
                console.log('Tidak ada patient dalam list')
            }
        }
        else{
            console.log(`Tidak ada patient yang dirawat`)
        }
    }

    checkin(name,age,gender,typePatient,diagnosis,room){
        let kindpatientcheker = typePatient
        if(kindpatientcheker === 'BPJS'){
            let patientbpjs = new PatientBPJS(name,age,gender,typePatient,diagnosis,room)
            let status = false;
            for(let i=0;i<this.roomBPJS.length;i++){
                if(patientbpjs.room === this.roomBPJS[i]){
                    status = true;
                }
            }
            if(status === true){
                console.log('Pasien telah terdaftar')
                patientbpjs.totalDayTreatment += 1
                this.patient.push(patientbpjs)
            }
            else{
                console.log('Mohon maaf anda layanan kamar ini tidak tersedia')
            }
        }
        else{
            let patientasuransi = new PatientAsuransi(name,age,gender,typePatient,diagnosis,room)
            let status = false;
            for(let i=0;i<this.roomAsuransi.length;i++){
                if(patientasuransi.room === this.roomAsuransi[i]){
                    status = true;
                }
            }
            if(status === true){
                console.log('Pasien telah terdaftar')
                patientasuransi.totalDayTreatment += 1
                this.patient.push(patientasuransi)
            }
            else{
                console.log('Mohon maaf anda layanan kamar ini tidak tersedia')
            }
        }
    }

    nextday(){
        for(let i=0;i<this.patient.length;i++){
            for(let j=0;j<this.JenisPenyakityangditanganirumahsakit.length;j++){

                if(this.patient[i].diagnosis === this.JenisPenyakityangditanganirumahsakit[j]){
                    // console.log(this.JenisPenyakityangditanganirumahsakit[j])
                    // console.log(this.lamanyapenanganan[j])
                    // if(this.patient[i].totalDayTreatment < this.lamanyapenanganan[j]){
                    //     console.log('======================================================')
                    //     console.log('Pasien: ')
                    //     console.log(`nama: ${this.patient[i].name}`)
                    //     console.log(`umur: ${this.patient[i].age}`)
                    //     console.log(`Diagnosa: ${this.patient[i].diagnosis}`)
                    //     console.log(`Baru menjalani perawatan selama ${this.patient[i].totalDayTreatment} hari`)
                    //     console.log('======================================================')
                    // }
                    if(this.patient[i].totalDayTreatment === this.lamanyapenanganan[j]){
                        console.log('======================================================')
                        console.log('Pasien: ')
                        console.log(`nama: ${this.patient[i].name}`)
                        console.log(`umur: ${this.patient[i].age}`)
                        console.log(`Diagnosa: ${this.patient[i].diagnosis}`)
                        console.log(`Telah menjalani perawatan selama ${this.patient[i].totalDayTreatment} hari`)
                        console.log(`Total Pembayaran sebesar ${this.patient[i].budgetMax + this.biayaAdministrasi}`)
                        console.log(`Pihak ${this.patient[i].typePatient} meng-cover sebesar: ${this.patient[i].budgetMax}`)
                        console.log(`Biaya administrasi yang harus dibayarkan sebesar: ${this.biayaAdministrasi}`)
                        console.log('======================================================')
                        this.patient[i].isCheckOut = true
                    }
                }

            }
            this.patient[i].totalDayTreatment += 1
        }
    }
}

let rumahsakit = new RumahSakit()

//name,age,gender,typePatient,budgetMax,diagnosis,room
rumahsakit.checkin('roni',14,'laki-laki','Asuransi','tipes','VIP');
rumahsakit.checkin('dini',12,'perempuan','BPJS','diare','Kelas 1');
rumahsakit.checkin('anton',22,'laki-laki','Asuransi','diare','Kelas 1');
rumahsakit.checkin('sinta',32,'perempuan','BPJS','muntaber','Kelas 2');
rumahsakit.ShowPatient()

for(let i=0;i<7;i++){
    rumahsakit.nextday()
}
rumahsakit.ShowPatient()
