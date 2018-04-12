const objRs = require('./rumahSakit');
let RumahSakit = objRs.RumahSakit
let Bpjs = objRs.Bpjs
let Asuransi = objRs.Asuransi
let Diagnosis = objRs.Diagnosis
let Patient = objRs.Patient
let Room = objRs.Room
let Kelas1 = objRs.Kelas1
let Vip = objRs.Vip
let Kelas2 = objRs.Kelas2


let anto = new Bpjs('anto',45,'Male','BPJS','diare')
let anti = new Bpjs('anti',35,'Female','BPJS','muntaber')
let harmony = new Asuransi('harmony',25,'Female','Asuransi','Tipes')
let gondangdia = new Asuransi('gondangdia',28,'Female','Asuransi','PUSING')
//console.log(anto);
let vip = new Vip()
let kelas1 = new Kelas1()
let kelas2 = new Kelas2()
// console.log(harmony);
//console.log(gondangdia);
 //console.log(anti);

let rumahSakit = new RumahSakit()
// console.log(diagnosis);


anti.checkin(vip)
// harmony.checkin(vip)
anto.checkin(kelas1)
console.log(anto);
console.log(anti);
//console.log(rumahSakit.showPatient);
