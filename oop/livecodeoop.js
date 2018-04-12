
class RumahSakit{
    constructor(room,harga){
        this.room=room
        this.harga=harga
    }
}

class Pasien{
    constructor(name,age,gender,type,budget,diagnosis,totalday,room){
        this.name=name
        this.age=age
        this.gender=gender
        this.type=type
        this.budgetMax=budget
        this.diagnosis=diagnosis
        this.totalDay=totalday
        this.room=room
        this.isCheckOut=false
    }
}

class editPasien{
    constructor(){
        this.daftar=[]
        this.day=0
        this.room=[]
    }

    buatRoom(){
        var room1=new RumahSakit("Room 1",750000)
        var vip=new RumahSakit("VIP",1500000)
        var room2 = new RumahSakit("Room 2",350000)
        this.room=[room1,vip,room2]
    }

    buatPasien(name,age,gender,type,budget,diagnosis,totalday,room){
        var pasien
        if(type==="BPJS"){
            pasien=new BPJS(name,age,gender,type,budget,diagnosis,totalday,room)
        }
        else if(type=="Asuransi"){
            pasien=new Asuransi(name,age,gender,type,budget,diagnosis,totalday,room)
        }
        return pasien
    }

    checkIn(namapasien){
        var hargaRoom
        var daftar =this.daftar
        var allRoom=this.room
        for(var i=0; i<allRoom.length; i++){
            if(namapasien.room===allRoom[i].room){
                hargaRoom=allRoom[i].harga
            }
        }
        if(namapasien.type=="BPJS" && namapasien.room=="VIP"){
            console.log("maaf layanan kamar ini tidak tersedia")
        }
        else if(namapasien.budget<hargaRoom){
            console.log("maaf, budget tidak cukup")
        }
        else{
            daftar.push(namapasien)
            console.log("Pasien berhasil didaftarkan")
         }
       
       return this.daftar
    }

    showPatient(){
        var listPasien=""
        for(var i=0; i<this.daftar.length; i++){
            listPasien+=(i+1)+". "+this.daftar[i].name + ", sakit " +this.daftar[i].diagnosis+" hari ke "+ this.day + "\n"
        }
        return listPasien
    }

    nextDay(namapasien){
        var allRoom=this.room
        var hargaRoom
        for(var i=0; i<allRoom.length; i++){
            if(namapasien.room===allRoom[i].room){
                hargaRoom=allRoom[i].harga
            }
        }

        var invoice="----Invoice----"+"\n"+"Nama : "+namapasien.name+ "\n"+"Umur :"+ namapasien.age+"\n"+"Diagnosis : "+namapasien.diagnosis+"\n"+ "Total hari : "+namapasien.totalDay+"\n"+
        "Total harga "+(namapasien.totalDay*hargaRoom) + "\n"+ "Di cover oleh " + namapasien.type+ " sebesar " + namapasien.cover + "\n" + "Sisa yang harus dibayar : " + (((namapasien.totalDay*hargaRoom)-namapasien.cover)<0? 0:((namapasien.totalDay*hargaRoom)-namapasien.cover))

        this.day+=1
        if(this.day===namapasien.totalDay+1){
            return invoice
        }else{
            return "Pasien masih dalam perawatan"
        }
    }
}


class BPJS extends Pasien{
   constructor(name,age,gender,type,budget,diagnosis,totalday,room){
    super(name,age,gender,type,budget,diagnosis,totalday,room)
    this.cover=2000000
   }
}

class Asuransi extends Pasien{
    constructor(name,age,gender,type,budget,diagnosis,totalday,room){
     super(name,age,gender,type,budget,diagnosis,totalday,room)
     this.cover=5500000
    }
}

var pasien=new editPasien()
var alya=pasien.buatPasien("Alya",20,"female","BPJS",3000000,"Demam Berdarah",3,"VIP")
var agung=pasien.buatPasien("Agung",20,"male","BPJS",3000000,"Asma",3,"Room 2")
var babe=pasien.buatPasien("Babe",25,"male","Asuransi",700000,"Kanker",5,"Room 1")
var nina=pasien.buatPasien("Nina",40,"female","BPJS",5000000,"Maag",2,"Room 1")
console.log('nina === >',nina)
pasien.buatRoom()
pasien.checkIn(agung)
pasien.checkIn(babe)
console.log(pasien.showPatient())

// console.log(agung)
// var room1=new RumahSakit("Room 1",750000)
// var vip=new RumahSakit("VIP",1500000)
// var room2 = new RumahSakit("Room 2",350000)

// var allRoom=[room1,vip,room2]

console.log(pasien.nextDay(nina))
console.log(pasien.nextDay(nina))
console.log(pasien.nextDay(nina))