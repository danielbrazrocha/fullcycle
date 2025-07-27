const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const dbConfig = {
  host: process.env.MYSQL_HOST || 'mysql',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'rootpassword',
  database: process.env.MYSQL_DATABASE || 'fullcycle'
};

let connection;

async function connectDb() {
  connection = await mysql.createConnection(dbConfig);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `);
}

app.get('/', async (req, res) => {
  try {
    if (!connection) {
      await connectDb();
    }

    const name = `User-${Math.floor(Math.random() * 1000)}`;
    await connection.execute('INSERT INTO people (name) VALUES (?)', [name]);

    const [rows] = await connection.execute('SELECT name FROM people');

    const namesList = rows.map(row => `<li>${row.name}</li>`).join('');

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>${namesList}</ul>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no servidor');
  }
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
