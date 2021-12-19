const basedatos = require('./pathbd');
module.exports = (app) => {
  app.use('/todb', basedatos);
};