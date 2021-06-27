const sqlite3 = require("sqlite3");
const { open } = require("sqlite")

module.exports = () => 
  //open serve para abrir o sqlite (abrir o banco)
  open({
    //definindo caminho e nome do banco de dados 
    filename: './src/db/rocketq.sqlite',
    //é quem comanda o banco (ele quem faz o trabalho dentro do banco)
    driver: sqlite3.Database
  })




