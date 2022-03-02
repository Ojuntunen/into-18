const db = require('../database');

const opintojakso = {
  getById: function(id_opintojakso, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id_opintojakso], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (koodi,laajuus,nimi) values(?,?,?)',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi],
      callback
    );
  },
  delete: function(id_opintojakso, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id_opintojakso], callback);
  },
  update: function(id_opintojakso, opintojakso, callback) {
    return db.query(
      'update opintojakso set koodi=?,laajuus=?, nimi=? where id_opintojakso=?',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi, id_opintojakso],
      callback
    );
  }
};
module.exports = opintojakso;