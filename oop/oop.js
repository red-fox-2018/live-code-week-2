class Pasien {
	constructor(name,age,gender,typePatient,budgetMax,diagnosis,room,isCheckOut) {
		this.name=name
		this.age-age
		this.gender=gender
		this.typePatient=typePatient
		this.budgetMax=budgetMax
		this.diagnosis=diagnosis
		this.totalDayTreatment=0
		this.room=room // ini harusnya composition 
		this.isCheckOut=isCheckOut
	}

	// assignDailyTreatment() {
	// 	if(this.diagnosis === 'Diare') {
	// 		return 2
	// 	}else if(this.diagnosis === 'Demam Berdarah') {
	// 		return 4
	// 	}else if(this.diagnosis === 'Muntaber') {
	// 		return 3
	// 	}else if(this.diagnosis === 'tipes') {
	// 		return 7
	// 	}else {
	// 		return 1
	// 	}
		
 // 	}

 	

 	// assignRoom(type,rate) {
 	// 	return new Ruang(type,rate);
 	// }
 	nextDay() {
 		this.totalDayTreatment+=1;
 	}

}


class PasienBPJS extends Pasien {
	constructor(name,age,gender,typePatient,budgetMax,diagnosis,room,isCheckOut) {
		super(name,age,gender,typePatient,budgetMax,diagnosis,room,isCheckOut)
	}
}

class PasienAsuransi extends Pasien {
	constructor(name,age,gender,typePatient,budgetMax,diagnosis,room,isCheckOut) {
		super(name,age,gender,typePatient,budgetMax,diagnosis,room,isCheckOut)
	}
}

class RumahSakit {
	constructor(listPasien) {
		this.listPasien=listPasien
		this.daftarPasien=[];

	}
		
	checkIn() {
		for(let i=0;i<listPasien.length;i++) {
			if(listPasien[i].typePatient === 'BPJS' && listPasien[i].room === 'VIP') {
				console.log('Mohon maaf anda layanan kamar ini tidak tersedia')
			}else {
				this.daftarPasien.push(listPasien[i])
				console.log('Pasien telah terdaftar')
			}
		}
 	}

 	

 	showPatient() {
 		for(let i=0;i<this.daftarPasien.length;i++) {
 			console.log(`${this.daftarPasien[i].name} ${this.daftarPasien[i].diagnosis} hari ke ${this.daftarPasien[i].totalDayTreatment}  ` )
 		}
 	}

 	invoice() {
 		for(let i=0;i<this.daftarPasien.length;i++) {
 			if(this.daftarPasien[i].diagnosis === 'Diare' && this.daftarPasien[i].totalDayTreatment>3 ) {
 				console.log(`Nama: ${daftarPasien[i].name} Umur ` )

 			}
 		}
 	}
	
}

class Ruang {
	constructor(type,rate) {
		this.type=type
		this.rate=rate
	}
}




var pasienBPJS1 =new PasienBPJS('Andi',15,'Pria','BPJS',2000000,'Diare','Kelas 1',false)
var pasienBPJS2 =new PasienBPJS('Edo',15,'Pria','BPJS',2000000,'Diare','VIP',false)

var pasienAsuransi1 =new PasienAsuransi('Budi',15,'Pria','Asuransi',2000000,'Muntaber','VIP',false)
var pasienAsuransi2 =new PasienAsuransi('Goers',15,'Pria','Asuransi',2000000,'Demam Berdarah','VIP',false) 

var listPasien=[pasienBPJS1,pasienBPJS2,pasienAsuransi1,pasienAsuransi2];
var rumahSakit =new RumahSakit(listPasien)

pasienBPJS1.nextDay()
pasienBPJS1.nextDay()
pasienBPJS1.nextDay()
pasienBPJS1.nextDay()

pasienBPJS2.nextDay()
pasienBPJS2.nextDay()

pasienAsuransi1.nextDay()
pasienAsuransi1.nextDay()


pasienAsuransi2.nextDay()
pasienAsuransi2.nextDay()
pasienAsuransi2.nextDay()

rumahSakit.checkIn();
console.log(rumahSakit.daftarPasien)
//console.log(rumahSakit.showPatient())
console.log(rumahSakit.invoice())

// console.log(pasienBPJS1)
// console.log(pasienAsuransi1)