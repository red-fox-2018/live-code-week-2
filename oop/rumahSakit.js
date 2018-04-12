class RumahSakit {
    constructor(){
        this.Patients = []
    }

    showPatient(Patient){
        console.log('List Pasien:')
        // console.log('jumlah pasiens',Patient.length)
        let counter = 0
        for(let i=0; i<Patient.length; i++){
            counter+=1
            console.log(`${counter}. ${Patient[i].name} (${Patient[i].diagnosis} hari ke ${Patient[i].totalDayTreatment})` )
        }

    }
    

}


module.exports = {RumahSakit}