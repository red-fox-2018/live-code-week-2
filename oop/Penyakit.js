
// class penyakit ---------------------------------------------------------

class Penyakit {
  constructor(name, totalPerawatan) {
    this.name = name;
    this.totalPerawatan = totalPerawatan || 1;
  }
}

module.exports = Penyakit;