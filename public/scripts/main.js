import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegando botoes com a classe CHECK
const checkButtons = document.querySelectorAll('.actions a.check')

//adicionando uma escuta em cada botao da classe check
checkButtons.forEach(button => {
  //adicionado a escuta
  button.addEventListener('click', handleClick)
})


const deleteButton = document.querySelectorAll('.actions .delete')

deleteButton.forEach(button => {
  //quando clica no botao excluir, ele envia para o handleClick
  //o false, assim mudando o valor padrao
  button.addEventListener('click',(event)=> handleClick(event, false))
})

//check é o padrao, sendo assim quando for clicado em excluir ele passa FALSE
function handleClick (event, check = true) {

  //preventDefault retira o padrao de querer enviar algo para a url
  event.preventDefault()

  //buscando o id atribuido a room no html e o data que esta na tag
  const roomId = document.querySelector('#room-id').dataset.id
  
  //para verificar se a acao foi checar a pergunta ou excluir
  const slug = check ? 'check' : 'delete'

  //o event traz todo o conteudo da tag que ele foi selecionado
  //o target se refere ao elemento que aconteceu o evento
  const questionId = event.target.dataset.id


  const form = document.querySelector('.modal form')
  //setAttribuite atuibui algo a tag selecionada
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = check ? 'Marcar como lido' : 'Excluir essa pergunta'
  modalDescription.innerHTML = 
  check ? 
  'Tem certeza que deseja marcar como lida?' :
  'Tem certeza que deseja excluir essa pergunta?'
  modalButton.innerHTML = check ? 'Sim, ler!' : 'Sim, excluir'
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  modal.open()
}