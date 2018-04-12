"use strict"

class RumahSakit {
    constructor() {
        this.room = this.availableRoom();
    }

    availableRoom() {
        let room = [];

        room.push(new Room('Kelas 2', 350000));
        room.push(new Room('Kelas 1', 750000));
        room.push(new Room('VIP', 1500000));

        return room;
    }

    checkIn(objPatient, chooseRoom) {
        let statusMessage;

        this.room.forEach(currentRoom => {
            if (objPatient.budgetMax >= currentRoom.price) {
                if (objPatient.typePatient === 'BPJS' && chooseRoom === 'VIP') {
                    statusMessage = `Mohon maaf ${objPatient.name} layanan kamar ini tidak tersedia`;
                } else if (chooseRoom === 'Kelas 1' && currentRoom.name === chooseRoom) {
                    objPatient.budgetMax -= currentRoom.price;
                    objPatient.room = currentRoom.name;
                    currentRoom.patients.push(objPatient);
                    statusMessage = `Patient telah terdaftar`;
                } else if (chooseRoom === 'Kelas 2' && currentRoom.name === chooseRoom) {
                    objPatient.budgetMax -= currentRoom.price;
                    objPatient.room = currentRoom.name;
                    currentRoom.patients.push(objPatient);
                    statusMessage = `Patient telah terdaftar`;
                } else if (chooseRoom === 'VIP' && currentRoom.name === chooseRoom) {
                    objPatient.budgetMax -= currentRoom.price;
                    objPatient.room = currentRoom.name;
                    currentRoom.patients.push(objPatient);
                    statusMessage = `Patient telah terdaftar`;
                }
            }
        });

        console.log(statusMessage);
    }

    showPatient(roomName) {
        let currentPatient = [];

        this.room.forEach(currentRoom => {
            if (roomName === currentRoom.name) {
                currentRoom.patients.forEach((patient, i) => {
                    currentPatient.push(`${i + 1}. ${patient.name} (${patient.diagnosis} hari ke ${patient.totalDayTreatment})`);
                });
            }
        });

        return currentPatient.join('\n');
    }

    nextDay(objPatient) {
        let pricePerDay;

        if (objPatient.isCheckOut === false) {
            objPatient.totalDayTreatment += 1;
        } else {
            let index;

            this.room.forEach(currentRoom => {
                if (objPatient.room === currentRoom.name) {
                    currentRoom.patients.forEach((currentPatient, i) => {
                        if (objPatient.name === currentPatient.name) {
                            index = i;
                        }
                    });
                    roomPrice = currentRoom.price;
                    currentRoom.patients.splice(index, 1);
                }
            });
        }
        if (objPatient.diagnosis === 'Diare' && objPatient.totalDayTreatment === 2) {
            pricePerDay = 2 * 30000;
            console.log(`**************************INVOICE****************************
            Pasien:
             Nama: ${objPatient.name}
             Umur: ${objPatient.age}
             Diagnosa: ${objPatient.diagnosis}
             telah menjalani perawatan selama ${objPatient.totalDayTreatment} hari.
            Total Pembayaran sebesar Rp 2250000
             Pihak bpjs telah meng-cover sebesar Rp 2000000.
             Biaya administrasi yang harus dibayarkan sebesar Rp 250000
            *************************************************************`);
            objPatient.isCheckOut = true;
        } else if (objPatient.diagnosis === 'Muntaber' && objPatient.totalDayTreatment === 3) {
            pricePerDay = 3 * 30000;
            console.log(`**************************INVOICE****************************
        Pasien:
         Nama: ${objPatient.name}
         Umur: ${objPatient.age}
         Diagnosa: ${objPatient.diagnosis}
         telah menjalani perawatan selama ${objPatient.totalDayTreatment} hari.
        Total Pembayaran sebesar Rp 2250000
         Pihak bpjs telah meng-cover sebesar Rp 2000000.
         Biaya administrasi yang harus dibayarkan sebesar Rp 250000
        *************************************************************`);
            objPatient.isCheckOut = true;
        } else if (objPatient.diagnosis === 'Demam Berdarah' && objPatient.totalDayTreatment === 4) {
            pricePerDay = 4 * 30000;
            console.log(`**************************INVOICE****************************
        Pasien:
         Nama: ${objPatient.name}
         Umur: ${objPatient.age}
         Diagnosa: ${objPatient.diagnosis}
         telah menjalani perawatan selama ${objPatient.totalDayTreatment} hari.
        Total Pembayaran sebesar Rp 2250000
         Pihak bpjs telah meng-cover sebesar Rp 2000000.
         Biaya administrasi yang harus dibayarkan sebesar Rp 250000
        *************************************************************`);
            objPatient.isCheckOut = true;
        } else if (objPatient.diagnosis === 'Tipes' && objPatient.totalDayTreatment === 7) {
            pricePerDay = 7 * 30000;
            console.log(`**************************INVOICE****************************
        Pasien:
         Nama: ${objPatient.name}
         Umur: ${objPatient.age}
         Diagnosa: ${objPatient.diagnosis}
         telah menjalani perawatan selama ${objPatient.totalDayTreatment} hari.
        Total Pembayaran sebesar Rp 2250000
         Pihak bpjs telah meng-cover sebesar Rp 2000000.
         Biaya administrasi yang harus dibayarkan sebesar Rp 250000
        *************************************************************`);
            objPatient.isCheckOut = true;
        } else if (objPatient.diagnosis === 'lainnya' && objPatient.totalDayTreatment === 1) {
            pricePerDay = 1 * 30000;
            console.log(`**************************INVOICE****************************
        Pasien:
         Nama: ${objPatient.name}
         Umur: ${objPatient.age}
         Diagnosa: ${objPatient.diagnosis}
         telah menjalani perawatan selama ${objPatient.totalDayTreatment} hari.
        Total Pembayaran sebesar Rp 2250000
         Pihak bpjs telah meng-cover sebesar Rp 2000000.
         Biaya administrasi yang harus dibayarkan sebesar Rp 250000
        *************************************************************`);
            objPatient.isCheckOut = true;
        }
    }
}

class Room {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.patients = [];
    }
}

class Penyakit {
    constructor(name, diagnosis) {
        this.name = name;
        this.diagnosis = diagnosis;
    }
}

class Patient {
    constructor(name, age, gender, typePatient, budgetMax, diagnosis, totalDayTreatment) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.typePatient = typePatient;
        this.budgetMax = budgetMax;
        this.diagnosis = diagnosis;
        this.totalDayTreatment = totalDayTreatment;
        this.room = null;
        this.isCheckOut = false;
    }
}

class BPJS extends Patient {
    constructor(name, age, gender, typePatient, budgetMax, diagnosis, totalDayTreatment) {
        super(name, age, gender, typePatient, budgetMax, diagnosis, totalDayTreatment)
    }
}

class Asuransi extends Patient {
    constructor(name, age, gender, typePatient, budgetMax, diagnosis, totalDayTreatment) {
        super(name, age, gender, typePatient, budgetMax, diagnosis, totalDayTreatment)
    }
}

let patient1 = new BPJS('Mamat', 30, 'laki-laki', 'BPJS', 2000000, 'Diare', 0);
let patient2 = new Asuransi('Amin', 25, 'laki-laki', 'Asuransi', 5500000, 'Tipes', 0);

let rumahSakit = new RumahSakit();
rumahSakit.checkIn(patient1, 'Kelas 1');
rumahSakit.checkIn(patient2, 'Kelas 1');
rumahSakit.nextDay(patient1);
rumahSakit.nextDay(patient1);

console.log(rumahSakit.showPatient('Kelas 1'));
console.log(rumahSakit.room[1]);
console.log(patient1);
// console.log(patient2);