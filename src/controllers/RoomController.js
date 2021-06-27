const Database = require('../db/config')

module.exports = {
  async create(req, res) {

    const db = await Database()
    const pass = req.body.password
    let roomId
    let isRoom = true

    //enquanto o isRoom estiver true, ele executa o codigo, assim que ele 
    //testar e passar false, ele segue e insere o codigo no fim do while
    while (isRoom) {
    
      //para criar o numero da sala, sorteado 6 numeros de 1 a 10 para
      //cada posicao
      for (var i=0; i < 6; i++) {
      i == 0 ?  roomId = Math.floor(Math.random()*10).toString() :
      roomId += Math.floor(Math.random()*10).toString()
      }

      //buscar e verificar se o numero 
      //gerado ja nao existe no banco de dados
      //funcao some é para comparar com o array se o dado que 
      //acabou ser passado corresponde a algum valor la,
      //se ele encontrar um, ja retorna true(achei um valor igual!)
      const roomsExistIds = await db.all(`SELECT id FROM rooms`)
      isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
      
      //se o retorno da funcao roomExistIds for false,
      //significa que nao tem nenhuma sala com o mesmo id
      //ai ele libera a criacao de uma nova sala
      if (!isRoom) {
        //insere a sala no banco 
        await db.run(`
        INSERT INTO rooms (
        id,
        pass) VALUES (
        ${parseInt(roomId)},
        ${pass}
        )`)
      }
    }
    
    await db.close()
    
    res.redirect(`/room/${roomId}`)
  },

  async open(req,res) {
    const db = await Database()
    
    //pegando o valor da sala pelos parametros passados acima
    const roomId = req.params.room
        
    const questions = await db.all(`
    SELECT * FROM questions 
    WHERE room = ${roomId} and read = 0`)

    const questionsRead = await db.all(`
    SELECT * FROM questions 
    WHERE room = ${roomId} and read = 1`)

    //para saber se há questoes na sala
    let isNoQuestions
    if (questions.length === 0) {
      if(questionsRead.length === 0) {
        isNoQuestions = true
      }
    }

    res.render('room', {
      roomId: roomId, 
      questions: questions,
      questionsRead: questionsRead,
      isNoQuestions: isNoQuestions
    })
  },

  async enter (req, res) {
    const roomId = req.body.roomId

    res.redirect(`room/${roomId}`)
  }
}