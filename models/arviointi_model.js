const db = require('../database');

const arviointi = {
  getById: function(id_arviointi, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id_arviointi], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (id_Arviointi,paivamaara,arvosana,id_opiskelija,id_opintojakso) values(?,?,?,?,?)',
      [arviointi.id_Arviointi, arviointi.paivamaara, arviointi.arvosana, arviointi.id_opiskelija, arviointi.id_opintojakso],
      callback
    );
  },
  delete: function(id_arviointi, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id_arviointi], callback);
  },
  update: function(id_arviointi, arviointi, callback) {
    return db.query(
      'update arviointi set paivamaara=?,arvosana=?,id_opiskelija=?,id_opintojakso=? where id_arviointi=?',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.id_opiskelija, arviointi.id_opintojakso, id_arviointi],
      callback
    );
  }
};
module.exports = arviointi;