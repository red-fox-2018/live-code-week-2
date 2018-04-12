class Room {
  constructor(classname, biaya) {
    this.class = classname
    this.biayaPerhari = biaya
  }
}

class VIP extends Room {
  constructor() {
    super("VIP", 1500000)
  }
}

class Kelas1 extends Room {
  constructor() {
    super("Kelas1", 750000)
  }
}

class Kelas2 extends Room {
  constructor() {
    super("Kelas2", 350000)
  }
}

module.exports = {
  Room,
  VIP,
  Kelas1,
  Kelas2
};
