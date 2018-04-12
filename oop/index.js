/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/

const Hospital = require('./hospital.js');
const Bpjs = require('./patien.js').Bpjs;
const Asuransi = require('./patien.js').Asuransi;

let hospital = new Hospital();
let budi = new Bpjs();
let santi = new Asuransi();
hospital.checkIn(santi);
hospital.showPatienT;
console.log(hospital.nexDay(6));
