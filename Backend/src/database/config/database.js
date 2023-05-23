require('dotenv').config()

const config = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '1234',
  database: 'pokedex',
  host: '127.0.0.1',
  port: Number(process.env.DB_PORT) || 5436,
  dialect: 'postgres',
  logging: false,
}

module.exports = config;
