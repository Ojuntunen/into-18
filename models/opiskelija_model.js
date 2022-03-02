const db = require('../database');

const opiskelija = {
  getById: function(id_opiskelija, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id_opiskelija], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (etunimi,sukunimi,osoite,luokkatunnus) values(?,?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id_opiskelija, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id_opiskelija], callback);
  },
  update: function(id_opiskelija, opiskelija, callback) {
    return db.query(
      'update opiskelija set etunimi=?,sukunimi=?, osoite=?,luokkatunnus=? where id_opiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus, id_opiskelija],
      callback
    );
  }
};
module.exports = opiskelija;