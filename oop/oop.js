class RumahSakit{
    constructor(room,price,exception){
        this.room = room
        this.price = price
        this.patients = []
        this._exception = exception
        this.day = 0
    }
    checkIn(patient){
        if(this._exception == patient.typePatient){
            return `Mohon maaf anda pasien ${patient.typePatient} ,layanan kamar ini tidak tersedia`
        }
        else{
            this.patients.push(patient)
            return `Pasien telah terdaftar`
        }
    }
    showPatient(){
        let result = ''
        if(this.patients[this.patients.length-1]==''){
            return 'maaf ruangan ini tidak ada pasien'
        }
        for(let i=0;i<this.patients.length;i++){
            if(this.patients[i].name!=undefined){
                result+= `${i+1}.${this.patients[i].name} (sakit ${this.patients[i].diagnosis} hari ke ${this.day})`
                result += '\n'
            } 
        }
        return result.slice(0,result.length-1)
    }
    nextDay(){
        this.day++
        for(let i=0;i<this.patients.length;i++){
            if(this.day==this.patients[i].totalDayTreatment){
                console.log('**************************INVOICE****************************')
                console.log(`Pasien:`)
                console.log(`Nama: ${this.patients[i].name}`)
                console.log(`Umur: ${this.patients[i].age}`)
                console.log(`Diagnosa: ${this.patients[i].diagnosis}`)
                console.log(`Telah menjalani perawatan selama ${this.day} hari`)
                console.log(`Total Pembayaran sebesar Rp ${this.price*this.day}`)
                console.log(`Pihak ${this.patients[i].typePatient} telah meng-cover sebesar Rp ${this.patients[i].budgetMax}.`)
                console.log(`Biaya administrasi yang harus dibayarkan sebesar Rp ${(this.price*this.day)-this.patients[i].budgetMax} `)
                console.log('*************************************************************')
                this.patients[i] = ''
            }
        }

    }
}
class VIP extends RumahSakit{
    constructor(){
        super('VIP',1500000,'BPJS')
    }
}
class Kelas1 extends RumahSakit{
    constructor(){
        super('Kelas1',750000)
    }
}
class Kelas2 extends RumahSakit{
    constructor(){
        super('Kelas2',350000)
    }
}

class Patient {
    constructor(name,age,gender,typePatient,budgetMax,diagnosis,totalDayTreatment,room,isCheckOut){
        this.name = name
        this.age = age
        this.gender = gender
        this.typePatient = typePatient
        this.budgetMax = budgetMax
        this.diagnosis = diagnosis
        this.totalDayTreatment = totalDayTreatment
        this.room = room
        this.isCheckOut = isCheckOut
    }
}

class BPJS extends Patient{
    constructor(name,age,gender,typePatient,budgetMax,diagnosis,totalDayTreatment,room,isCheckOut){
        super(name,age,gender,typePatient,budgetMax,diagnosis,totalDayTreatment,room,isCheckOut)
    }
}
class Asuransi extends Patient{
    constructor(name,age,gender,typePatient,budgetMax,diagnosis,totalDayTreatment,room,isCheckOut){
        super(name,age,gender,typePatient,budgetMax,diagnosis,totalDayTreatment,room,isCheckOut)
    }
}


let soni = new BPJS('Soni',24,'male','BPJS',2000000,'Muntaber',3,'VIP',false)
let arif = new BPJS('Arif',22,'male','BPJS',2000000,'Demam Berdarah',4,'Kelas1',true)
let dony = new Asuransi('Dony',23,'male','Asuransi',5500000,'Tipes',7,'VIP',false)
let gladys = new Asuransi('Gladys',24,'female','Asuransi',5500000,'Demam Berdarah',4,'VIP',true)

let vip = new VIP()
let kelas1 = new Kelas1()
let kelas2 = new Kelas2()
// console.log(vip.checkIn(soni))
vip.checkIn(gladys)
vip.checkIn(dony)
vip.nextDay()
vip.nextDay()
vip.nextDay()
vip.nextDay()
console.log(vip.showPatient())


