const { Client } = require('pg');
const Router = require('express-promise-router');

const client = new Client({
    connectionString: process.env.PG_CONECT,
    ssl: {
      rejectUnauthorized: false
    }
  });
  
client.connect();


const router = new Router();

router.get('/consultacomentarios', async (req, res) => {
    const { rows } = await client.query('SELECT * FROM comentarios');
    res.send(rows);
  });

module.exports = router;