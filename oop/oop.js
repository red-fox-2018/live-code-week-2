class Patients{
	constructor(name,age,gender,typePatient,budgetMax,diagnosis,totalDayTreatment,room,isCheckOut,dayAwal){
		this._name = name
		this._age = age
		this._gender = gender
		this._typePatient = typePatient
		this._budgetMax = budgetMax
		this._diagnosis = diagnosis
		this._totalDayTreatment = totalDayTreatment 
		this._room = room
		this._isCheckOut = isCheckOut
		this._dayAwal = dayAwal
	}
	checkIn(objPatient){
		if (objPatient._typePatient!=='Asuransi' && objPatient._room === 'VIP') {
			return console.log('Mohon maaf layanan tak tersedia');
		}
		if (objPatient._typePatient==='BPJS' || objPatient._typePatient==='Asuransi') {
			return console.log('Pasien telah terdaftar');
		}
	}
	showPatient(objPatient){
		return console.log(`${objPatient._name} (${objPatient._diagnosis} hari ke ${objPatient._totalDayTreatment})`);
	}
	nextDay(objPatient){
		while(objPatient._dayAwal<objPatient._totalDayTreatment){
			objPatient._dayAwal++
			if (objPatient._room==='KelasDua') {
		console.log('***************************************************************');
		console.log('Pasien');
		console.log(`Nama: ${objPatient._name}`);
		console.log(`Diagnosa: ${objPatient._diagnosis}`);
		console.log(`telah menjalani perawatan selama ${objPatient._dayAwal} hari`);
		console.log(`total pembayaran sebesar ${350000*objPatient._dayAwal}`);
		console.log(`pihak BPJS telh meng-cover sebesar Rp. 2000000.`);
		if (350000*objPatient._dayAwal-2000000<0) {
			console.log('gratis');
		}
		else{
			console.log(`Biaya administrasi yang harus dibayarkan sebesar Rp ${350000*objPatient._dayAwal-2000000}`);
		}
		console.log('***************************************************************');
			}
			else if (objPatient._room==='KelasSatu') {
		console.log('***************************************************************');
		console.log('Pasien');
		console.log(`Nama: ${objPatient._name}`);
		console.log(`Diagnosa: ${objPatient._diagnosis}`);
		console.log(`telah menjalani perawatan selama ${objPatient._dayAwal} hari`);
		console.log(`total pembayaran sebesar ${750000*objPatient._dayAwal}`);
		console.log(`pihak BPJS telh meng-cover sebesar Rp. 2000000.`);
		if (750000*objPatient._dayAwal-2000000<0) {
			console.log('gratis');
		}
		else{
			console.log(`Biaya administrasi yang harus dibayarkan sebesar Rp ${750000*objPatient._dayAwal-2000000}`);
		}
			}
		else if (objPatient._room==='VIP') {
		console.log('***************************************************************');
		console.log('Pasien');
		console.log(`Nama: ${objPatient._name}`);
		console.log(`Diagnosa: ${objPatient._diagnosis}`);
		console.log(`telah menjalani perawatan selama ${objPatient._dayAwal} hari`);
		console.log(`total pembayaran sebesar ${1500000*objPatient._dayAwal}`);
		console.log(`pihak BPJS telh meng-cover sebesar Rp. 5500000.`);
		if (1500000*objPatient._dayAwal-5500000<0) {
			console.log('gratis');
		}
		else{
			console.log(`Biaya administrasi yang harus dibayarkan sebesar Rp ${1500000*objPatient._dayAwal-5500000}`);
		}
			}
		}
	}
}
class Vip extends Patients{
	constructor(){
		this._harga = 1500000
	}
}
class KelasSatu extends Patients{
	constructor(){
		this._harga = 750000
	}
}
class KelasDua extends Patients{
	constructor(harga){
		this._harga = harga
	}
}

var patient = new Patients()

//RELEASE 1
let bpjs = new Patients('Dea',17,'Perempuan','BPJS',100000000,'Diare',2,'KelasDua',false,1)
let asuransi = new Patients('Marc',21,'Laki','Asuransi',100000000000,'DBD',4,'VIP',false,1)
patient.nextDay(asuransi)
//console.log(bpjs);