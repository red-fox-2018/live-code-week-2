class RumahSakit{
    constructor(name,age,gender,typePatient,totalMoney,room,dianosis){
        this.name = name
        this.age = age
        this.gender = gender
        this.typePatient = typePatient
        this.budget = totalMoney
        this.totalDayTreatment = 0
        this.room = room
        this.listPatient = []
        this.dianosis = dianosis
        this.isCheckOut = ""
        this.message = ""
    }

    nextDay(){
        this.totalDayTreatment += 1
    }

    checkIn(){
        if(this.typePatient=="BPJS" && this.room=="Kelas VIP"){
            this.message = "Mohon maaf anda layanan kamar ini tidak tersedia"
        }else if(this.typePatient=="BPJS"){
            let pasien = new PatientBPJS(this.name,this.age,this.gender,this.typePatient,this.totalDayTreatment,this.dianosis)
            this.listPatient.push(pasien)
            this.message = "Pasien telah terdaftar"
        }else if(this.typePatient=="asuransi"){
            let pasien = new PatientAsuransi(this.name,this.age,this.gender,this.typePatient,this.totalDayTreatment,this.dianosis)
            this.listPatient.push(pasien)
            this.message = "Pasien telah terdaftar"
        }
    }

    static showPatient(list){
        let result = ""
        for(let i=0;i<list.length;i++){
            if(list[i].totalDayTreatment <= 2 && list[i].message=='Pasien telah terdaftar'){
                result += `${i} ${list[i].name} (${list[i].dianosis} hari ke ${list[i].totalDayTreatment})\n`
            }
            else if(list[i].totalDayTreatment <= 3 && list[i].message=='Pasien telah terdaftar'){
                result += `${i} ${list[i].name} (${list[i].dianosis} hari ke ${list[i].totalDayTreatment})\n`
            }
            else if(list[i].totalDayTreatment <= 4 && list[i].message=='Pasien telah terdaftar'){
                result += `${i} ${list[i].name} (${list[i].dianosis} hari ke ${list[i].totalDayTreatment})\n`
            }
            else if(list[i].totalDayTreatment <= 7 && list[i].message=='Pasien telah terdaftar'){
                result += `${i} ${list[i].name} (${list[i].dianosis} hari ke ${list[i].totalDayTreatment})\n`
            }
        }

        return result.slice(0,result.length-1)
    }

    static invoicePatient(list){
        
        let invoice = ""
        for(let i=0;i<list.length;i++){
            if(list[i].totalDayTreatment == 4 && list[i].message=='Pasien telah terdaftar'){
                invoice += "\n**************************INVOICE****************************\n"
                invoice += "Pasien:\n"
                invoice += `Nama: ${list[i].name}\n`
                invoice += `Umur: ${list[i].age}\n`
                invoice += `Diagnosa: ${list[i].dianosis}\n`
                invoice += `telah menjalani perawatan selama ${list[i].totalDayTreatment-1} hari.\n`
                invoice += `Total Pembayaran sebesar Rp 2250000\n`
                invoice += `Pihak bpjs telah meng-cover sebesar Rp 2000000.\n`
                invoice += `Biaya administrasi yang harus dibayarkan sebesar Rp 250000\n`
                invoice += "*************************************************************"
            }
        }
        return invoice
    }
}

class Patient{
    constructor(name,age,gender,typePatient,totalDayTreatment,room,bugdetMax,dianosis){
        this.name = name
        this.age = age
        this.gender = gender
        this.typePatient = typePatient
        this.totalDayTreatment = totalDayTreatment
        this.room = room
        this.bugdetMax = bugdetMax
        this.dianosis = dianosis
    }
}

class PatientAsuransi extends Patient{
    constructor(name,age,gender,typePatient,totalDayTreatment,room,bugdetMax,dianosis){
        super(name,age,gender,typePatient,totalDayTreatment,room,5500000,dianosis)
    }
}

class PatientBPJS extends Patient{
    constructor(name,age,gender,typePatient,totalDayTreatment,room,bugdetMax,dianosis){
        super(name,age,gender,typePatient,totalDayTreatment,room,2000000,dianosis)
    }
}

//release 0 & 1
let budi = new RumahSakit("Budi",20,"Male","BPJS",2000000,"Kelas VIP","Muntaber")
budi.checkIn()
console.log(`${budi.name} ${budi.message}`)

let ghea = new RumahSakit("Ghea",22,"Female","asuransi",4500000,"Kelas VIP","Tipes")
ghea.checkIn()
ghea.nextDay()
ghea.nextDay()
ghea.nextDay()
ghea.nextDay()
ghea.nextDay()
console.log(`${ghea.name} ${ghea.message}`)

let rian = new RumahSakit("Rian",22,"Male","BPJS",1500000,"Kelas 1","Muntaber")
rian.checkIn()
rian.nextDay()
rian.nextDay()
rian.nextDay()
rian.nextDay()
console.log(`${rian.name} ${rian.message}`)

//release 2
let list = [budi,ghea,rian]
console.log(RumahSakit.showPatient(list))

//release 3
console.log(RumahSakit.invoicePatient(list))