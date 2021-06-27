//arquivo que serve para criar tabelas e o proprio banco

const Database = require('./config')

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY, 
      pass TEXT 
    )`);

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT,
      read INT,
      room INT
    )`)

    await db.close()
  }
}

initDb.init()

