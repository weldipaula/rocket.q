export default function Modal() {

  //pegando os valores do html
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  //adicionando envento ao clicar
  cancelButton.addEventListener('click', close)

  function open() {
    modalWrapper.classList.add('active')
  }
  function close() {
    modalWrapper.classList.remove('active')
  }
  return {
    open,
    close
  }
}